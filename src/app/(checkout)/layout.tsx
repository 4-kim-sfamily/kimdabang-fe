"use client"; // 클라이언트 컴포넌트임을 명시
import BackwardButton from "@/components/ui/BackwardButton";
import { CheckoutProvider } from "@/context/CheckoutContext";
import React from "react";

function layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <CheckoutProvider>
      <div className="fixed top-0 left-0 bg-[white] w-full z-10 h-[56px] flex items-center">
        <div className="absolute left-3 top-[25%]">
          <BackwardButton />
        </div>
        <p className=" ml-[50%] translate-x-[-50%] font-extrabold">결제하기</p>
      </div>
      {modal}
      {children}
    </CheckoutProvider>
  );
}
export default layout;
