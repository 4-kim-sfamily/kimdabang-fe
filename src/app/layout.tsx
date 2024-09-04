"use client";
import Footer from "@/components/layouts/Footer";
import { SessionProvider } from "next-auth/react";
import Header from "../components/layouts/Header";
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
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
