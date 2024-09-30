import { ShareIcon } from "@/components/icons/Index";
import Link from "next/link";

interface ProductInfoProps {
  categoryId: number;
  largeCategory: string;
  productName: string;
  price: number;
}

export default function ProductInfo({
  categoryId,
  largeCategory,
  productName,
  price,
}: ProductInfoProps) {
  return (
    <section className="">
      {/* 상품 카테고리 */}
      <div className="flex justify-between">
        <Link
          href={`/maincategory/${categoryId}`}
          className="text-sm text-gray-600 pl-5"
        >
          {largeCategory}
        </Link>
        <button type="button" className="pr-5">
          <ShareIcon />
        </button>
      </div>

      <hr className="my-2" />

      {/* 상품 이름 */}
      <h2 className="text-lg font-bold  text-left text-gray-800 pl-5">
        {productName}
      </h2>

      {/* 상품 가격 */}
      <p className="text-left text-2xl font-semibold mt-2 pl-5">
        {price.toLocaleString()}원
      </p>
    </section>
  );
}
