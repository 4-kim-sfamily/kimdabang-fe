import Link from "next/link";

export default async function PayInfo({
  totalEstimatedPrice,
  shippingfee,
  count,
}: {
  totalEstimatedPrice: number;
  shippingfee: number;
  count: number;
}) {
  const remainingForFreeShipping = 30000 - totalEstimatedPrice;
  const isFreeShipping = totalEstimatedPrice >= 30000;
  return (
    <div className="mb-36">
      {totalEstimatedPrice > 0 && (
        <div className="flex flex-col items-center">
          <h5 className="text-sm">
            상품 {count}건 {totalEstimatedPrice.toLocaleString("ko-KR")}원 +
            배송비 {shippingfee}원 = 총
            {(totalEstimatedPrice + shippingfee).toLocaleString("ko-KR")}원
          </h5>
          <h5 className="text-sm font-extrabold">
            {!isFreeShipping
              ? `${remainingForFreeShipping.toLocaleString("ko-KR")}원 더 담으면 무료배송`
              : "무료배송"}
          </h5>
          <Link href={"/"} className="text-[#a88855]">
            더 담으러 가기
          </Link>
        </div>
      )}
      <div>
        <div className="payInfo">
          <h4>상품금액</h4>
          <h4 className="font-extrabold">
            {totalEstimatedPrice.toLocaleString("ko-KR")}원
          </h4>
        </div>
        {/* <div className="payInfo">
          <h4>할인금액</h4>
          <h4 className="font-extrabold">0원</h4>
        </div> */}
        <div className="payInfo">
          <h4>배송비</h4>
          <h4 className="font-extrabold">
            {shippingfee.toLocaleString("ko-KR")}
          </h4>
        </div>
        <div className="payInfo">
          <h2 className="text-lg">총 결제예정금액</h2>
          <h2 className="text-xl font-extrabold">
            {(totalEstimatedPrice + shippingfee).toLocaleString("ko-KR")}원
          </h2>
        </div>
      </div>
      <div className="my-4 bg-[#eeeeebcc] p-2 text-sm text-[#5C5C5C]">
        장바구니에는 최대 20개까지 담을 수 있으며, 담기 상품은 최대 2개월간
        보관됩니다. <br /> 총 결제예정금액은 결제 단계에서 추가 할인 수단
        적용으로 달라질 수 있습니다 <br />
        가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
      </div>
    </div>
  );
}
