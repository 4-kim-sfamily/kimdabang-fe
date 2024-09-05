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
  // json-server에서 데이터 fetch
  const res = await fetch("http://localhost:4000/deliveryStates", {
    cache: "no-store",
  });

  // API로부터 받아온 데이터를 타입으로 명시
  const deliveryData: DeliveryStateData[] = await res.json();

  return (
    <section>
      <DeliveryHeader />
      <ul className="flex justify-around whitespace-nowrap text-[1rem] text-gray-500">
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
