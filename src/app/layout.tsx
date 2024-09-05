"use client";
import Footer from "@/components/layouts/Footer";
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
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
