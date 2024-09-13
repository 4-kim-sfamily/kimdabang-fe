import Image from "next/image";
import { ReviewItemCatdData } from "../../lib/dummy/items/ReviewItemCardData";
import Star from "../icons/Star";

export default function ReviewPreview({
  productCode,
  visible,
}: {
  productCode: string;
  visible: boolean;
}) {
  return (
    <div className="w-[172px]">
      <div className="flex items-center text-[#777777] gap-2 text-[12px]">
        <div className="flex items-center">
          <Star />
          {`${ReviewItemCatdData.rate} | ${ReviewItemCatdData.reviewCnt}건`}
        </div>
        {visible && (
          <div className="flex w-[22px] h-[22px]">
            {ReviewItemCatdData.reviewPreviewImg?.map((imgUrl, index) => (
              <Image
                key={index} // id를 사용해 key를 설정
                src={imgUrl} // imgUrl을 사용
                alt={`review image ${index}`}
                width={50}
                height={50}
                className="rounded-full"
              />
            ))}
          </div>
        )}
      </div>
      {visible && (
        <p className="text-xs text-[#666666] truncate">
          {ReviewItemCatdData.recentReviewcontent}
        </p>
      )}
    </div>
  );
}
