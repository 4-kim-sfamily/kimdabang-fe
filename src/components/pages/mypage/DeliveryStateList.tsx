import DeliveryHeader from "./DeliveryHeader";
import DeliveryState from "./DeliveryState";

export default function DeliveryStateList() {
  return (
    <section>
      <DeliveryHeader />
      <ul className="flex justify-between whitespace-nowrap text-[1rem] text-gray-500">
        <DeliveryState state="주문 접수" />
        <li className="flex items-center mb-4"> ▶ </li>
        <DeliveryState state="결제 완료" />
        <li className="flex items-center mb-4"> ▶ </li>
        <DeliveryState state="상품 준비중" />
        <li className="flex items-center mb-4"> ▶ </li>
        <DeliveryState state="배송중" />
        <li className="flex items-center mb-4"> ▶ </li>
        <DeliveryState state="배송 완료" />
      </ul>
    </section>
  );
}
