"use client";
import React, { useEffect } from "react";

function modal({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <dialog
      open
      className="top-0 left-0 w-full h-full flex flex-col items-center overflow-auto z-10"
    >
      {children}
    </dialog>
  );
}

export default modal;
