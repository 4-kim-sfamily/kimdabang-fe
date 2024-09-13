// next-auth.d.ts
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string | null;
      email: string | null;
      image: string | null;
      accessToken: string; // accessToken 추가
    } & DefaultSession["user"];
  }
}
