import AuthContextProvider from "@/providers/AuthContextProvider";
import { getServerSession } from "next-auth/next";
import { Metadata } from "next/types";
import { options } from "./api/auth/[...nextauth]/options";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "스타벅스 김다방",
    template: "%s | STARBUCKS CLONE APP",
  },
  description: "1차프로젝트 SPHAROS 5TH",
  metadataBase: new URL("https://starbukcskorea.kr"),
  openGraph: {
    url: "https://starbukcskorea.kr",
    title: "SPHAROS 5TH",
    description: "1차프로젝트 SPHAROS 5TH",
    images: [{ url: "/assets/images/og/og_image.png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;

  return (
    <html lang="ko">
      <body>
        <AuthContextProvider isAuth={isAuth}> {children}</AuthContextProvider>
      </body>
    </html>
  );
}
