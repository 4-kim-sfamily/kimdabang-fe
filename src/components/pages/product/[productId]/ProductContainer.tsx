import { getProductOption } from "@/actions/getProductOption";
import { getSubCategory } from "@/actions/main/category";
import { getProudctPage } from "@/actions/product/getProductPage";
import ProductPurchaseBar from "@/components/layouts/ProductPurchaseBar";
import dynamic from "next/dynamic";
import ProductCustomerReview from "./ProductCustomerReview";
import ProductHeader from "./ProductHeader";
import SameCategoryProduct from "./SameCategoryProduct";

export default async function ProductContainer({
  productCode,
  authStatus,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const product = await getProudctPage(productCode);
  const productCategoryInfo = await getSubCategory(product.categoryId);
  // const productContent = await getProductContent(productCode);
  const ProductOptionData = await getProductOption(productCode);
  const ProductDetailImage = dynamic(() => import("./ProductDetailImage"), {
    ssr: false,
  });
  console.log(ProductOptionData);
  return (
    <>
      <ProductHeader
        product={product}
        productCategoryInfo={productCategoryInfo}
      />
      {/* <ProductAds /> */}
      {/* <ProductDetailImage productContent={productContent.content} /> */}
      <ProductCustomerReview productCode={productCode} />
      {/* <QnA /> */}
      {/* 추가 상품 리스트 필요 */}
      <SameCategoryProduct authStatus={authStatus} />

      <ProductPurchaseBar
        optionsData={ProductOptionData}
        productPrice={product.productPrice}
      />
    </>
  );
}
