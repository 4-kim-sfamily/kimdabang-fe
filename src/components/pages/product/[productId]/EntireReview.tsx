import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
    <section className="px-2 py-6">
      <h3 className="font-extrabold">전체 리뷰</h3>
      <ul className="flex flex-col w-full  gap-2 py-3 scroll-smooth">
        {EntireReviewList.map((review) => (
          <li key={review.id} className="w-full ">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 text-xs text-gray-700">
                  <p> {review.rating}</p>
                  <p>{review.userId}</p>
                </div>
                <Link
                  className="text-sm text-gray-400"
                  href={`/product/${productCode}/${review.id}/detail`}
                >
                  {">"}
                </Link>
              </div>
              <p className="text-sm">{review.comment}</p>
              {/* imgUrl이 있을 경우에만 이미지 렌더링 */}
              {review.imgUrl && (
                <Image
                  src={review.imgUrl}
                  alt={`Review for ${productCode}`}
                  width={102}
                  height={102}
                  className="object-cover aspect-square rounded-lg mt-2"
                />
              )}
              <p className="text-xs text-gray-400 my-2">{review.createdAt}</p>
            </div>
            {review.id != "5" && <hr />}
          </li>
        ))}
      </ul>
      <Button variant="inversion" className="mx-auto   border-[0.1rem]">
        <Link href={`product/${productCode}/allreviews`}>전체리뷰 보기</Link>
      </Button>
    </section>
  );
}
