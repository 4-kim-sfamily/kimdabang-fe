import ReviewDetail from "@/components/pages/review/ReviewDetail";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "리뷰 상세",
  description: "리뷰 상세 페이지입니다.",
};
export default function Page() {
  return (
    <main>
      <Suspense
        fallback={<Skeleton className="w-full h-[800px] bg-gray-200" />}
      >
        <ReviewDetail />
      </Suspense>
    </main>
  );
}
