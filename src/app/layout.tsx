"use client";
import BottomNavBar from "@/components/layouts/BottomNavBar";
import { Header } from "@/components/layouts/Header";
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
        <SessionProvider>
          <Header />
          {children}
          <BottomNavBar></BottomNavBar>
        </SessionProvider>
      </body>
    </html>
  );
}

// export const metadata: Metadata = {
//   title: "STARBUCKS",
//   description: "스타벅스 클론코딩",
// };
