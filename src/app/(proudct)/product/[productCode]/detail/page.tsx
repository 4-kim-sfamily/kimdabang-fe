import ReviewDetail from "@/components/pages/review/ReviewDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

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
