import Header from "@/components/layouts/Header";
import NavBar from "@/components/ui/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
}
export default layout;
