import { ProductType } from "@/types/ResponseType";
import Image from "next/image"; // or 'react-bootstrap/Image'

export default async function MyOrderItemList({
  productData,
  productDataList,
  optionId,
  optionIdList,
}: {
  productData?: ProductType;
  productDataList?: ProductType[];
  optionId?: string;
  optionIdList?: string[];
}) {
  return (
    <div className="mt-2">
      {productData && optionId ? (
        // 단일 제품 데이터가 있을 경우
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={`${productData.description}`}
              alt={`${productData.productName}`}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <p>{`${productData.productName}`}</p>
              <p>{`${optionId}`}</p>
            </div>
          </div>
          <p className="whitespace-nowrap">
            가격 : {`${productData.productPrice}`}원
          </p>
        </div>
      ) : productDataList && optionIdList ? (
        // 리스트로 여러 제품 데이터가 있을 경우
        <div>
          {productDataList.map((item, index) => (
            <div
              key={item.productCode}
              className="flex justify-between items-center mt-2"
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={`${item.description}`}
                  alt={`${item.productName}`}
                  width={50}
                  height={50}
                  className="rounded-xl"
                />
                <div className="flex flex-col">
                  <p>{`${item.productName}`}</p>
                  <p>{`${optionIdList[index]}`}</p>
                </div>
              </div>
              <p>가격 : {`${item.productPrice}`}원</p>
            </div>
          ))}
        </div>
      ) : (
        <p>주문한 상품이 없습니다.</p>
      )}
    </div>
  );
}
