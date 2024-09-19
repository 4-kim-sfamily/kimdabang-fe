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
      async authorize(credentials) {
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }
        console.log("credentials", credentials);
        // 로그인 요청을 보낼 URL
        const res = await fetch(
          `${process.env.BACKEND_URL}/api/v1/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
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

        // 401 에러 시, 회원가입 페이지로 리다이렉트
        if (result.status === 500) {
          console.log("401에러 발생, 존재하지 않는 회원입니다.");
          // 여기서 Kakao 정보를 `user`에 추가하여 `jwt`에서 처리할 수 있도록 넘김
          user.provider = account.provider;
          user.providerAccountId = account.providerAccountId;
          return "/member/join"; // 회원가입 페이지로 리다이렉트
        } else {
          console.log(result);
        }
      }
      return true; // 로그인 성공
    },

    async jwt({ token, user }) {
      // 로그인 시도 후 user에 Kakao 정보가 있으면 token에 저장
      if (user && user.provider && user.providerAccountId) {
        token.provider = user.provider;
        token.providerAccountId = user.providerAccountId;
      }

      if (user) {
        token.accessToken = user.accessToken;
        token.name = user.name as string;
      }
      return token;
    },

    async session({ session, token }) {
      // token에서 Kakao 정보가 있으면 세션에 추가
      session.user = {
        ...session.user,
        name: token.name as string,
        accessToken: token.accessToken as string,
      };

      if (token.provider && token.providerAccountId) {
        session.user.provider = token.provider;
        session.user.providerAccountId = token.providerAccountId;
      }

      return session;
    },
  },
  pages: {
    signIn: "/member/login",
  },
};
