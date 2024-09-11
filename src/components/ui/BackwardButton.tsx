"use client";

import { DownwardArrow } from "@/components/icons/Index";
import { useRouter } from "next/navigation";

export default function BackwardButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack}>
      <DownwardArrow degree={90} color="#444444" />
    </button>
  );
}
