import { commonResType, OptionData } from "@/types/ResponseType";
import { fetchData } from "../common/common";

/* 이 코드는 Option ID 와 Product Code를 받아서 
 해당하는 상품의 정보를 가져오는 API입니다.*/
export const getOptionDetail = async (
  productCode: string,
  optionId: string,
): Promise<OptionData> => {
  // getOptionDetail로 최소 재고량, 수량, 옵션변동가격, 상태를 불러옴.
  const data = await fetchData<commonResType<OptionData>>(
    `/api/v1/options/?productCode=${productCode}&optionId=${optionId}`,
    "GET",
    "",
  );
  return data.data;
};

// 옵션 ID로 옵션 정보 가져오기 API 구현 필요
