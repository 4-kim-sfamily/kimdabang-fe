import { ItemCardType } from "@/types/items/ItemCard";
import ProductCustomerReview from "./ProductCustomerReview";
import ProductDetailImage from "./ProductDetailImage";
import ProductHeader from "./ProductHeader";

export default async function ProductContainer({
  productCode,
}: {
  productCode: string;
}) {
  // 제품 정보 가져오기 (예시 API 호출)
  //   예시 1000555910531
  console.log("This is Product Code", productCode);
  const res = await fetch(
    `${process.env.JSONSERVER_URL}/BestTumblr?productId=${productCode}&_limit=3`,
    {
      cache: "no-store",
    },
  );
  // 응답 데이터를 JSON으로 변환
  const product: ItemCardType[] = await res.json();
  return (
    <>
      <ProductHeader product={product[0]} />
      {/* <ProductAds /> */}
      <ProductDetailImage />
      <ProductCustomerReview productCode={productCode} />
      {/* <QnA /> */}
      {/* 추가 상품 리스트 필요 */}
    </>
  );
}
