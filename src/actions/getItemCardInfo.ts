import { ItemCardType } from "@/types/items/ItemCard";
import { getProductInfo } from "./getProductInfo";

export const getItemCardInfo = async (productCode: string) => {
  // 1. 제품 정보 가져오고
  const productData = await getProductInfo(productCode);

  // 이제 조합해서 하나의 객체로 만들어서 반환
  const productCardInfo: ItemCardType = {
    productCode: productData.productCode,
    productName: productData.productName,
    productPrice: productData.productPrice,
    productImageUrl: productData.description,
    categoryId: productData.categoryId.toString(),
    inStock: true,
  };
  return productCardInfo; // 각 product 정보를 반환
};
