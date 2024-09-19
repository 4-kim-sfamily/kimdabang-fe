import { ItemCardType } from "@/types/items/ItemCard";
import { getProductInfo } from "./getProductInfo";
import { getProductMedia } from "./getProductMedia";

export const getItemCardInfo = async (productCode: string) => {
  // 1. 제품 정보 가져오고
  const productData = await getProductInfo(productCode);
  // 2. 제품 이미지 가져오고
  // 아직 API가 완성되지 않아 임시로 1번 제품의 이미지를 가져옴
  const productMedia = await getProductMedia(productCode);
  // const productMedia = await getProductMedia(1);
  // 3. 제품 정보의 카테고리 바탕으로 카테고리 이름 가져오고
  //   이건 API 미완성이라 생략

  console.log("MEdia값:", productMedia);
  // 이제 조합해서 하나의 객체로 만들어서 반환
  const productCardInfo: ItemCardType = {
    id: productData.id,
    productCode: productData.productCode,
    productName: productData.productName,
    productPrice: productData.productPrice,
    productImageUrl: productMedia[0].mediaURL,
    largeCategory: productData.categoryId.toString(),
    inStock: true,
  };
  return productCardInfo; // 각 product 정보를 반환
};
