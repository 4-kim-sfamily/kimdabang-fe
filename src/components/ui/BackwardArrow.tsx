"use client"; // 클라이언트 컴포넌트

import { DownwardArrow } from "@/components/icons/Index";
import { useRouter } from "next/navigation";

export default function BackwardArrow() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      onClick={handleBack}
      className="mt-5 ml-4 mb-16 hover:cursor-pointer"
    >
      <DownwardArrow degree={90} />
    </header>
  );
}
