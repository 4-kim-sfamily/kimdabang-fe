import Header from "@/components/layouts/Header";
import ProductPurchaseBar from "@/components/layouts/ProductPurchaseBar";
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
      {modal}
      {children}
      <ProductPurchaseBar />
    </>
  );
}
export default layout;
