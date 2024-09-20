import { getProductInfo } from "@/actions/getProductInfo";
import { getProductMedia } from "@/actions/getProductMedia";
import { getShippingAddressDefault } from "@/actions/shipping/shippingActions";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import AddressSection from "../cart/AddressSection";
import CouponSection from "./CouponSection";
import MyOrderItemList from "./MyOrderItemList";

export default async function CheckoutContainer({
  type,
  productCode,
  optionId,
}: {
  type: string;
  productCode?: string;
  optionId?: string;
}) {
  console.log(type, productCode);
  if (type === "buyNow" && productCode && optionId) {
    const productData = await getProductInfo(productCode);
    const productMedia = await getProductMedia(productCode);
    const thumbnail = productMedia[0].mediaURL;
    // 여기서 받아야하는 거
    // 제품이름 / 가격 / 썸네일 / 옵션

    // const optionData = await getOptionDataByOptionId(optionId);
  }
  const isAddress = await getShippingAddressDefault();
  if (!isAddress) {
    redirect("/shipping/addShippingAddress");
  }

  return (
    <div className="mt-20 px-4 flex flex-col gap-4">
      <section>
        <p className="font-bold text-2xl -mb-10">배송지</p>
        <AddressSection />
      </section>
      <section>
        <p className="font-bold text-2xl">주문 내역</p>
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
