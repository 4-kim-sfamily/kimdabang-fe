import ReviewSection from "@/components/pages/review/ReviewSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 전체 리뷰",
  description: "제품들 전체 리뷰를 확인할 수 있습니다.",
};
export default async function page({
  params,
}: {
  params: { productCode: string };
}) {
  return (
    <main>
      <ReviewSection productCode={params.productCode} />
    </main>
  );
}
