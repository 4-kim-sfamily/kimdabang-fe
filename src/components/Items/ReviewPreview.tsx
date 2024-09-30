import { productRateData } from "@/actions/product/productRateData";
import Star from "../icons/Star";

export default async function ReviewPreview({
  productCode,
  visible,
}: {
  productCode: string;
  visible: boolean;
}) {
  const ReviewData = await productRateData(productCode);

  return (
    <div className="w-[172px]">
      <div className="flex items-center text-[#777777] gap-2 text-[12px]">
        <div className="flex items-center">
          <Star />
          {`${ReviewData.rating.toPrecision(2)} | ${ReviewData.reviewCount}건`}
        </div>
      </div>
    </div>
  );
}
