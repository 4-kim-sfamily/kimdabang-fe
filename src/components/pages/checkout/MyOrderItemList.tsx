import { cartList } from "@/types/items/Cart";
import { ProductType } from "@/types/ResponseType";
import Image from "next/image"; // or 'react-bootstrap/Image'

export default async function MyOrderItemList({
  productData,
  productDataList,
  optionId,
  cartlist,
  amount,
}: {
  productData?: ProductType;
  productDataList?: ProductType[];
  optionId?: string;
  cartlist?: cartList[];
  amount?: number;
}) {
  if (productData) {
    console.log("단일로 들어옴", productData);
  } else if (productDataList) {
    console.log("리스트로 들어옴", productDataList);
  } else {
    console.log("둘다 없음");
  }
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
              <p>
                {`${optionId}`} {`${amount}개`}
              </p>
            </div>
          </div>
          <p className="whitespace-nowrap">
            가격 : {`${productData.productPrice}`}원
          </p>
        </div>
      ) : productDataList ? (
        // 리스트로 여러 제품 데이터가 있을 경우
        <div>
          {productDataList.map((item, index) => (
            <div
              key={item.productCode}
              className="flex justify-between gap-2 items-center mt-2"
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
                  <p>{`${cartlist[index].productOptionId} ${cartlist[index].amount}개`}</p>
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
