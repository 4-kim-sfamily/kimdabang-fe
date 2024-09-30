import WhiteHeader from "@/components/layouts/WhiteHeader";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: "장바구니",
  description: "장바구니 페이지입니다.",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WhiteHeader />
      {children}
    </>
  );
}
export default layout;
