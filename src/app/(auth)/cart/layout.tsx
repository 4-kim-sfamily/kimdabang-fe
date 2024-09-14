import WhiteHeader from "@/components/layouts/WhiteHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WhiteHeader />
      {children}
    </>
  );
}
export default layout;
