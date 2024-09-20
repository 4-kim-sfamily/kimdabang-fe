import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        loginId: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }
        console.log("credentials", credentials);
        // 로그인 요청을 보낼 URL
        const res = await fetch(
          `${process.env.BACKEND_URL}/api/v1/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              loginId: credentials.loginId,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          },
        );
        console.log("이건 res값", res);
        if (res.ok) {
          const user = await res.json();
          console.log("userData", user.data);
          return user.data;
        }
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("signIn 콜백 데이터의 user부분", user);
      console.log("Account 데이터", account);

      // Kakao 로그인 처리
      if (account?.provider === "kakao") {
        console.log("kakao에서 로그인 시도");
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/v1/auth/sociallogin`,
          {
            method: "POST",
            body: JSON.stringify({
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            }),
            headers: { "Content-Type": "application/json" },
          },
        );
        if (result.ok) {
          const data = await result.json();
          user.accessToken = data.data.accessToken;
          user.name = data.data.name;
          return true;
        } else if (result.status === 400) {
          console.log("400에러 발생, 존재하지 않는 회원입니다.");
          // 여기서 Kakao 정보를 `user`에 추가하여 `jwt`에서 처리할 수 있도록 넘김
          const provider = account.provider;
          const providerAccountId = account.providerAccountId;
          return `/member/join?provider=${provider}&providerAccountId=${providerAccountId}`; // 회원가입 페이지로 리다이렉트
        } else {
          throw new Error("Kakao 로그인 중 오류 발생");
        }
      }
      return true;
    },

    async jwt({ token, user, account, profile, session }) {
      if (account && user) {
        token.accessToken = user.accessToken; // accessToken을 string으로 캐스팅
        token.name = user.name as string; // 이름도 string으로 캐스팅
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        name: token.name as string, // token에서 name을 string으로 캐스팅
        accessToken: token.accessToken as string, // token에서 accessToken을 string으로 캐스팅
      };
      return session;
    },
    async redirect({ url, baseUrl }) {
      // 로그인 성공 후 홈("/")으로 리다이렉트
      return "/"; // baseUrl은 기본적으로 홈("/") 경로를 가리킵니다
    },
  },
  pages: {
    signIn: "/member/login",
  },
};
