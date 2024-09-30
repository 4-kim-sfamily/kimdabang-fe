import "next-auth";

// `User`와 `Session` 인터페이스에 accessToken과 Kakao 관련 정보 추가
declare module "next-auth" {
  interface User {
    accessToken: string; // accessToken 추가
  }

  interface Session {
    user: {
      accessToken: string; // session.user에 accessToken 포함
    } & DefaultSession["user"];
  }
}
