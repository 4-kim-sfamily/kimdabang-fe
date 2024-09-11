import BottomNavBar from "@/components/layouts/BottomNavBar";
import Footer from "@/components/layouts/Footer";
import WhiteHeader from "@/components/layouts/WhiteHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WhiteHeader />
      {children}
      <Footer />
      <BottomNavBar />
    </>
  );
}
export default layout;
