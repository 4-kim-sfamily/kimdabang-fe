// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string | null;
      accessToken: string; // accessToken 추가
    };
    // & DefaultSession["user"];
  }
}
