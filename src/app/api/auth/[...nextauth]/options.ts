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
        // 여기에 POST 요청을 보낼 URL 작성
        const res = await fetch(
          `${process.env.BACKEND_URL}/api/v1/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          },
        );
        console.log(res);
        // 여기서 받아올 response 받을 json 생각
        if (res.ok) {
          const user = await res.json();
          console.log("user", user);
          return user;
        } else {
          console.error(res);
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
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn 콜백 데이타의 user부분", user);
      console.log("현재 로그인 경로", account?.provider);

      if (account?.provider === "kakao") {
        // 만약에 로그인 경로가 kakao 일때는 추가 fetch 필요
      }

      // 여기에 data fetch 필요
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      // console.log("This is a session", session);
      return session;
    },
  },
  pages: {
    signIn: "/member/login",
    // 여기에 추가페이지 필요
  },
};
