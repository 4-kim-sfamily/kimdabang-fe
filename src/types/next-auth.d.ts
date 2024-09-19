import "next-auth";

// `User`와 `Session` 인터페이스에 accessToken과 Kakao 관련 정보 추가
declare module "next-auth" {
  interface User {
    accessToken: string; // accessToken 추가
    provider?: string; // Kakao provider 정보 추가 (optional)
    providerAccountId?: string; // Kakao providerAccountId 추가 (optional)
  }

  interface Session {
    user: {
      accessToken: string; // session.user에 accessToken 포함
      provider?: string; // session.user에 provider 포함 (optional)
      providerAccountId?: string; // session.user에 providerAccountId 포함 (optional)
    } & DefaultSession["user"];
  }
}
