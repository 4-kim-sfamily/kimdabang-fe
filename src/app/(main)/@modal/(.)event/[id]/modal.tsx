"use client";
import { useRouter } from "next/navigation";
import React from "react";

function modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  console.log("인터셉트");

  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center"
    >
      <button
        className=" rounded-full absolute top-5 right-5 z-50"
        onClick={() => router.back()}
      >
        {"X"}
      </button>
      {children}
    </dialog>
  );
}

export default modal;
