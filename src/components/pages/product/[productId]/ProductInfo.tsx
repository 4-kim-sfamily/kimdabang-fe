import { ShareIcon } from "@/components/icons/Index";
import Link from "next/link";

interface ProductInfoProps {
  largeCategory: string;
  productName: string;
  price: number;
}

export default function ProductInfo({
  largeCategory,
  productName,
  price,
}: ProductInfoProps) {
  return (
    <>
      {/* 상품 카테고리 */}
      <div className="flex justify-between">
        <Link
          href={`/maincategory/${largeCategory}`}
          className="text-base text-gray-600 mx-2"
        >
          {largeCategory}
        </Link>
        <button type="button" className="mx-2">
          <ShareIcon />
        </button>
      </div>

      <hr className="my-2" />

      {/* 상품 이름 */}
      <h2 className="text-xl font-bold mx-2 text-left text-gray-800">
        {productName}
      </h2>

      {/* 상품 가격 */}
      <p className="text-left mx-2 text-3xl font-semibold mt-4">{price}</p>
    </>
  );
}
