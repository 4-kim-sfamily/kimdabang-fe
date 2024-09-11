import BottomNavBar from "@/components/layouts/BottomNavBar";
import Footer from "@/components/layouts/Footer";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <BottomNavBar />
    </>
  );
}
export default layout;
