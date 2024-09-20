import { getProductInfo } from "../getProductInfo";
import { getProductMedia } from "../getProductMedia";
import { getOptionDetail } from "./getOptionDetail";

// 두개다 같은 Table

// 안에 Option값뭐 받는지에 따라 변경 예정
export interface ProductOptionInfoType {
  productName: string;
  productQuantity: number;
  productPrice: number;
  productMedia: string;
}

// ProductCode로 상품명 받아오기
export const getProductOptionInfo = async (
  productCode: string,
  optionId: string,
): Promise<ProductOptionInfoType> => {
  //   ProductCode로 상품명, 가격 받아오기
  const productData = await getProductInfo(productCode);
  const productPrice = productData.productPrice;

  const productOptionDetatil = await getOptionDetail(productCode, optionId);

  // OptionID로 옵션 Data 받아오기 (API 미구현)

  // ProductCode로 이미지 받아오기
  const productMedia = await getProductMedia(productCode);
  // 제품 이름, 제품 수량, 제품 가격, 제품 이미지 ( + 추가로 제품 옵션 들어가야함)
  const productOptionInfo = {
    productName: productData.productName,
    productQuantity: productOptionDetatil.quantity,
    productPrice: productPrice,
    productMedia: productMedia[0].mediaURL,
  };
  return productOptionInfo;
};
