import { ItemCardType } from "@/types/items/ItemCard";
import ProductAds from "../ProductAds";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductHeader({ product }: { product: ItemCardType }) {
  return (
    <div className="shadow-lg rounded-lg mx-auto">
      {/* ProductImage 컴포넌트에 imgUrl와 productName을 전달 */}
      <ProductImage
        productImageUrl={product.productImageUrl}
        productName={product.productName}
      />

      {/* ProductInfo 컴포넌트에 필요한 정보 전달 */}
      <ProductInfo
        largeCategory={product.largeCategory}
        productName={product.productName}
        price={product.productPrice}
      />
      <ProductAds />
      {/* <ReviewPreview productCode={product.ProductCode} visible={false} /> */}

      <hr />
    </div>
  );
}
