"use client";
import { AgreementProvider } from "@/app/context/AgreementContext";
import BackwardArrow from "@/components/ui/BackwardArrow";
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
