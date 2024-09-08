import BottomNavBar from "@/components/layouts/BottomNavBar";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/ui/NavBar";
import React from "react";

function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      {modal}
      <Footer />
      <BottomNavBar />
    </>
  );
}
export default layout;
