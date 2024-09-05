import ReviewPreview from "@/components/Items/ReviewPreview";
import { ItemCardProps } from "@/types/items/ItemCard";
import ProductAds from "../ProductAds";
import ProductImage from "./ProductImage"; // 새로운 ProductImage 컴포넌트 임포트
import ProductInfo from "./ProductInfo";

export default function ProductHeader({ product }: { product: ItemCardProps }) {
  return (
    <div className="shadow-lg rounded-lg mx-auto">
      {/* ProductImage 컴포넌트에 imgUrl와 productName을 전달 */}
      <ProductImage
        imgUrl={product.item.imgUrl}
        productName={product.item.ProductName}
      />

      {/* ProductInfo 컴포넌트에 필요한 정보 전달 */}
      <ProductInfo
        largeCategory={product.item.largeCategory}
        productName={product.item.ProductName}
        price={product.item.price}
      />
      <ProductAds />
      <ReviewPreview productCode={product.item.ProductCode} visible={false} />

      <hr />
    </div>
  );
}
