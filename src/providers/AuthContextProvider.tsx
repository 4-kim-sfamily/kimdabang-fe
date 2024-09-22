"use client";
import { SessionContext } from "@/context/SessionContext";
import React from "react";

export const AuthContextProvider = ({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: React.ReactNode;
}) => {
  return (
    <SessionContext.Provider value={isAuth}>{children}</SessionContext.Provider>
  );
};

export default AuthContextProvider;
