import Image from "next/image";
import {
  rate,
  recentReviewcontent,
  reviewCnt,
  reviewPreviewImg,
} from "../../lib/dummy/items/ReviewItemCardData.json";
import Star from "../icons/Star";

export default function ReviewPreview({
  productCode,
  visible,
}: {
  productCode: string;
  visible: boolean;
}) {
  console.log(productCode, "fetch요청");
  return (
    <div className="w-[172px]">
      <div className="flex items-center text-[#777777] gap-2 text-[12px]">
        <div className="flex items-center">
          <Star />
          {`${rate} | ${reviewCnt}건`}
        </div>
        {visible && (
          <div className="flex w-[22px] h-[22px]">
            {reviewPreviewImg?.map((imgUrl, index) => (
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
        <p className="text-xs text-[#666666] truncate">{recentReviewcontent}</p>
      )}
    </div>
  );
}
