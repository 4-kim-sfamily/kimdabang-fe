import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReviewSection from "../../review/ReviewSection";

export interface ReviewTypeForJsonServer {
  id: string;
  productCode: string;
  userId: string;
  comment: string;
  createdAt: string;
  rating: number;
  imgUrl?: string;
}

export default async function EntireReview({
  productCode,
}: {
  productCode: string;
}) {
  const response = await fetch(
    `${process.env.JSONSERVER_URL}/entireReview?productCode=${productCode}&_limit=7`,
    {
      cache: "force-cache",
    },
  );
  const EntireReviewList: ReviewTypeForJsonServer[] = await response.json();

  return (
    <section className="px-2 pb-6">
      <ReviewSection productCode={productCode} size={5} />
      <Button variant="inversion" className="mx-auto   border-[0.1rem]">
        <Link href={`${productCode}/review`}>전체리뷰 보기</Link>
      </Button>
    </section>
  );
}
