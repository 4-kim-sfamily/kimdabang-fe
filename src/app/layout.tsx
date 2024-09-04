"use client";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

// export const metadata: Metadata = {
//   title: "STARBUCKS",
//   description: "스타벅스 클론코딩",
// };
