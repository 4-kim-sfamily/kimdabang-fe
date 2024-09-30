"use client";
import BackwardArrow from "@/components/ui/BackwardArrow";
import { AgreementProvider } from "@/context/AgreementContext";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AgreementProvider>
        <BackwardArrow />
        {children}
      </AgreementProvider>
    </>
  );
}
export default layout;
