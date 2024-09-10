import Header from "@/components/layouts/Header";
import ProductPurchaseBar from "@/components/layouts/ProductPurchaseBar";
import NavBar from "@/components/ui/NavBar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <ProductPurchaseBar />
    </>
  );
}
export default layout;
