"use client";
import ReviewDetail from "@/components/pages/review/ReviewDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ReviewModal from "./modal";

export default function page({ params }: { params: { productCode: string } }) {
  return (
    <ReviewModal>
      <main>
        <Suspense fallback={<Skeleton className="w-full h-[90vh]" />}>
          <ReviewDetail />
        </Suspense>
      </main>
    </ReviewModal>
  );
}
