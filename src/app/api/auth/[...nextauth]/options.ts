import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.id || !credentials?.password) {
          return null;
        }
        console.log("credentials", credentials);
        // 여기에 POST 요청을 보낼 URL 작성
        const res = await fetch(
          `http://http://10.10.10.19:8080/api/v1/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.id,
              password: credentials.password,
            }),
          },
        );

        // 여기서 받아올 response 받을 json 생각
        if (res.ok) {
          const user = await res.json();
          console.log("user", user);
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user", user);
      console.log("email, credentials", email, credentials);
      if (profile && account) {
        console.log("profile:", profile);
        console.log("account:", account);
        const notUser = true;
        if (notUser)
          return `/sign-up?callBack=notUser&provider=${account.provider}`;
      }
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    // 여기에 추가페이지 필요
  },
};
