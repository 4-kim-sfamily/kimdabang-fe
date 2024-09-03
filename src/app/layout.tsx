import Footer from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STARBUCKS",
  description: "스타벅스 클론코딩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
