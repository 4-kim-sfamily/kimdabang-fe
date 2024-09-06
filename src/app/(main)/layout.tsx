import BottomNavBar from "@/components/layouts/BottomNavBar";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/ui/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}

      <Footer />
      <BottomNavBar />
    </>
  );
}
export default layout;
