"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider> {children}</SessionProvider>;
}
//  이거 app / layout에 넣으면 인증되고 시작됨.
