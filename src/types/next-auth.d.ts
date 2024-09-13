import "next-auth";

// `User` 인터페이스에 `accessToken` 추가
declare module "next-auth" {
  interface User {
    accessToken: string; // 추가할 accessToken
  }

  interface Session {
    user: {
      accessToken: string; // session.user에 accessToken 포함
    } & DefaultSession["user"];
  }
}
