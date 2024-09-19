import { Button } from "@/components/ui/button";
import AddressSection from "../cart/AddressSection";
import CouponSection from "./CouponSection";
import MyOrderItemList from "./MyOrderItemList";

export default function CheckoutContainer(type: string, itemNo?: string) {
  console.log("type", type);
  if (type === "buyNow") {
    console.log("productOptionId", itemNo);
  }
  return (
    <div className="mt-20 px-4 flex flex-col gap-4">
      <section>
        배송지
        <AddressSection />
        {/* 배송지 들어갈 곳 */}
      </section>
      <section>
        주문 정보
        <MyOrderItemList />
        {/* 주문 정보 들어갈 곳 */}
      </section>
      <hr />
      <CouponSection />
      <hr />
      <section>
        결제수단
        {/* 결제수단 들어갈 곳 */}
      </section>
      <hr />
      <section>
        주문 금액
        {/* 주문금액 들어갈 곳 */}
      </section>
      <hr />
      {/* 여기서 가격총합 변수로 관리 */}
      <Button variant="starbucks" className="mx-auto">
        10000원 결제하기
      </Button>
    </div>
  );
}
