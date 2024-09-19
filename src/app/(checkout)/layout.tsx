import BackwardButton from "@/components/ui/BackwardButton";
import React from "react";

function layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 bg-[white] w-full z-10 h-[56px] flex items-center">
        <div className="absolute left-3 top-[25%]">
          <BackwardButton />
        </div>
        <p className=" ml-[50%] translate-x-[-50%] font-extrabold">결제하기</p>
      </div>
      {modal}
      {children}
    </>
  );
}
export default layout;
