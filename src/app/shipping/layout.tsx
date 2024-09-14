import MypageHeader from "@/components/layouts/MypageHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MypageHeader title="배송지 변경" />
      {children}
    </>
  );
}
export default layout;
