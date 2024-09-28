import { getProductCodeInfo } from "@/actions/productOption/getProductOption";
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
  let optionData = "";
  if (optionId && optionId != "0") {
    optionData = await getProductCodeInfo(productData.productCode, optionId);
  }

  let optionDataList = [];
  if (cartlist) {
    optionDataList = await Promise.all(
      cartlist.map(async (item) => {
        let optionData = "";
        if (item.productOptionId != 0) {
          optionData = await getProductCodeInfo(
            item.productCode,
            item.productOptionId.toString(),
          );
        }
        return optionData;
      }),
    );
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
              width={90}
              height={90}
              className="rounded-xl"
            />
            <ul>
              <li className="w-full">{`${productData.productName}`}</li>
              <li className="flex justify-between">
                <p>{`${optionId} ${amount}개`}</p>
                <p>{`${productData.productPrice.toLocaleString("ko-KR")}`}원</p>
              </li>
            </ul>
          </div>
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
                  width={90}
                  height={90}
                  className="rounded-xl"
                />
                <ul>
                  <li className="w-full font-extrabold">{`${item.productName}`}</li>
                  <li className="flex justify-between">
                    <p>{`${cartlist[index].productOptionId} ${cartlist[index].amount}개`}</p>
                    <p className="font-extrabold">
                      {`${item.productPrice.toLocaleString("ko-KR")}`}원
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>주문한 상품이 없습니다.</p>
      )}
    </div>
  );
}
