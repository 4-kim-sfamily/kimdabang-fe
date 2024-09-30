import { Fragment } from "react";
import DeliveryHeader from "./DeliveryHeader";
import DeliveryState from "./DeliveryState";

// 배송 상태 데이터 구조 정의
interface DeliveryStateData {
  id: number;
  state: string;
  count: number;
}

export default async function DeliveryStateList() {
  // API로부터 받아온 데이터를 타입으로 명시
  const deliveryData: DeliveryStateData[] = [
    {
      id: 1,
      state: "주문 접수",
      count: 3,
    },
    {
      id: 2,
      state: "결제 완료",
      count: 5,
    },
    {
      id: 3,
      state: "상품 준비중",
      count: 2,
    },
    {
      id: 4,
      state: "배송중",
      count: 1,
    },
    {
      id: 5,
      state: "배송 완료",
      count: 4,
    },
  ];

  return (
    <section>
      <DeliveryHeader />
      <ul className="flex w-full justify-around whitespace-nowrap text-[1rem] text-gray-500">
        {deliveryData.map((item: DeliveryStateData) => (
          <Fragment key={item.id}>
            <DeliveryState state={item.state} count={item.count} />
            {item.state !== "배송 완료" && (
              <li className="flex items-center mb-4"> ▶ </li>
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
