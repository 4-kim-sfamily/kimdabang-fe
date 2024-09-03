import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
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
        const res = await fetch(`http://10.10.10.19:8080/api/v1/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        console.log(res);
        // 여기서 받아올 response 받을 json 생각
        if (res.ok) {
          const user = await res.json();
          console.log("user", user);
          return user.data;
        } else {
          console.error(res);
        }
        return null;
      },
    }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID || "",
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile);
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/member/login",
    // 여기에 추가페이지 필요
  },
};
