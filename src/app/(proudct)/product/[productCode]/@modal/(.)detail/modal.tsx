"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ReviewModal({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 비활성화
    return () => {
      document.body.style.overflow = ""; // 모달 닫힐 때 원래 상태로 복구
    };
  }, []);

  const router = useRouter();
  return (
    <dialog className="fixed top-0 left-0 w-full h-full  overflow-hidden flex flex-col items-center z-50">
      <p className="mt-4 text-xl ">리뷰 상세</p>
      <Button
        className="rounded-xl w-3 h-2  border-black  absolute top-4 right-4 z-50"
        onClick={() => router.back()}
      >
        {"X"}
      </Button>
      {children}
    </dialog>
  );
}
