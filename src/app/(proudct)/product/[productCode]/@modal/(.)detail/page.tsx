import Image from "next/image";
import ReviewModal from "./modal";

async function page({
  params,
  searchParams,
}: {
  params: { productName: string };
  searchParams: { reviewId: string };
}) {
  const review = [];
  return (
    <ReviewModal>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {review?.imgUrl && (
          <div className="relative w-full max-h-[600px] mt-2  aspect-square mb-4">
            {/* 부모 요소의 크기를 화면에 꽉 차도록 설정 */}
            <Image
              src={review.imgUrl}
              alt={review.id}
              layout="fill" // 부모 요소를 가득 채움
              objectFit="cover" // 이미지를 부모 요소에 맞게 자르고 확장
            />
          </div>
        )}
        <div className="flex flex-col w-full p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-xs text-gray-700">
              <p> {review.rating}</p>
              <p>{review.userId}</p>
            </div>
          </div>
          <p className="text-sm">{review.comment}</p>
          <p className="text-xs text-gray-400 my-2">{review.createdAt}</p>
        </div>
      </div>
    </ReviewModal>
  );
}

export default page;
