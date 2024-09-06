import { ItemCardProps } from "@/types/items/ItemCard";
import ProductDetailImage from "./ProductDetailImage";
import ProductHeader from "./ProductHeader";

// export interface ItemCardType {
//     id: number;
//     ProductCode: string;
//     ProductName: string;
//     price: number;
//     imgUrl: string;
//     largeCategory: string;
//     inStock: boolean;
//     discount?: DiscountedItemCardType;
//   }

export default async function ProductContainer({
  productId,
}: {
  productId: number;
}) {
  // 제품 정보 가져오기 (예시 API 호출)
  //   예시 1000614588163
  const res = await fetch(
    `${process.env.JSONSERVER_URL}/BestTumblr?ProductCode=${productId}`,
    {
      cache: "no-store",
    },
  );
  // 응답 데이터를 JSON으로 변환

  const products: ItemCardProps[] = await res.json();
  console.log("Thisis product", products);
  return (
    <>
      <ProductHeader product={products[2]} />
      <ProductDetailImage />
    </>
  );
}
