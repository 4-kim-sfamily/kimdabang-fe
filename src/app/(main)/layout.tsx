import BottomNavBar from "@/components/layouts/BottomNavBar";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/ui/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <BottomNavBar />
    </>
  );
}
export default layout;
