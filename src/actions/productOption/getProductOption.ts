import { getProductInfo } from "../getProductInfo";
import { getProductMedia } from "../getProductMedia";

// 두개다 같은 Table

// 안에 Option값뭐 받는지에 따라 변경 예정
export interface ProductOptionInfoType {
  productName: string;
  productPrice: number;
  productMedia: string;
}

// ProductCode는 Cart에서 받아옴
// ProductCode로 상품명 받아오기
export const getProductOptionInfo = async (
  productCode: string,
): Promise<ProductOptionInfoType> => {
  //   ProductCode로 상품명, 가격 받아오기
  const productData = await getProductInfo(productCode);
  const productPrice = productData.productPrice;

  // PriorOptionId로 옵션 Data 받아오기 (API 미구현)

  // ProductCode로 이미지 받아오기
  const productMedia = await getProductMedia(productCode);
  const productOptionInfo = {
    productName: productData.productName,
    productPrice: productPrice,
    productMedia: productMedia[0].mediaURL,
  };
  return productOptionInfo;
};
