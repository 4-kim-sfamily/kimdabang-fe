import { Button } from "@/components/ui/button";
import AddressSection from "../cart/AddressSection";
import CouponSection from "./CouponSection";
import MyOrderItemList from "./MyOrderItemList";

export default function CheckoutContainer({
  type,
  itemNo,
}: {
  type: string;
  itemNo?: string;
}) {
  console.log(type, itemNo);
  if (type === "buyNow" && !itemNo) {
    return <div className="mt-20">상품을 선택해주세요</div>;
  }
  return (
    <div className="mt-20 px-4 flex flex-col gap-4">
      <section>
        <p className="font-bold text-2xl -mb-10">배송지</p>
        <AddressSection />
      </section>
      <section>
        <p className="font-bold text-2xl">주문 내역</p>
        <MyOrderItemList type={type} itemNo={itemNo} />
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
