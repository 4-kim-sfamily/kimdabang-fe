"use client";

import { DownwardArrow } from "@/components/icons/Index";
import { useRouter } from "next/navigation";

export default function BackwardButton({
  children,
  url,
}: {
  children?: React.ReactNode;
  url?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (url) {
      router.push(`/${url}`);
    } else {
      router.back();
    }
  };

  return (
    <button onClick={handleBack}>
      {children ? children : <DownwardArrow degree={90} color="#444444" />}
    </button>
  );
}
