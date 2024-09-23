import { ProductPageType } from "@/actions/product/getProductPage";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import ProductAds from "../ProductAds";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
// 헤더 실제 API로 변경 완료
export default function ProductHeader({
  product,
  productCategoryInfo,
}: {
  product: ProductPageType;
  productCategoryInfo: CategoryType;
}) {
  return (
    <div className="shadow-lg rounded-lg mx-auto">
      {/* ProductImage 컴포넌트에 imgUrl와 productName을 전달 */}
      <ProductImage
        productImageUrl={product.description}
        productName={product.productName}
      />

      {/* ProductInfo 컴포넌트에 필요한 정보 전달 */}
      <ProductInfo
        categoryId={product.categoryId}
        largeCategory={productCategoryInfo.name}
        productName={product.productName}
        price={product.productPrice}
      />
      <ProductAds />
      {/* <ReviewPreview productCode={product.ProductCode} visible={false} /> */}

      <hr />
    </div>
  );
}
