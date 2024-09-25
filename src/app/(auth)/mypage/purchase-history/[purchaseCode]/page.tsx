import { getMyPurchase } from "@/actions/mypage/purchase/purchase";
import PurchaseItem from "@/components/pages/purchase/PurchaseItem";
import { PurchaseDetailType } from "@/types/ResponseType";

export default async function page({
  params,
}: {
  params: { purchaseCode: number };
}) {
  console.log(params.purchaseCode);
  const data: PurchaseDetailType = await getMyPurchase({
    purchaseCode: params.purchaseCode,
  });
  console.log(data);
  return (
    <main>
      <div className="border-b-8 border-[#b9b9b957] p-4">
        <h1 className="font-extrabold">No.{data.purchaseCode}</h1>
        <h3 className="">
          {new Date(data.purchaseDate).toISOString().split("T")[0]}
        </h3>
        <p>{data.status}</p>
      </div>

      <div className="border-b-8 border-[#b9b9b957] p-4">
        {data.itemList.map((item) => (
          <PurchaseItem item={item} key={item.productCode} />
        ))}
      </div>
      <section className="px-4 py-3">
        <span className="shipping-info">
          <h3>배송 정보</h3>
          <div>
            <h5>주소</h5>
            <p>{data.address}</p>
          </div>
          <div>
            <h5>이름</h5>
            <p>{data.name}</p>
          </div>
          <div className="mb-7">
            <h5>전화번호</h5>
            <p>{data.phone}</p>
          </div>
        </span>
        <span className="pay-info">
          <h3 className="">결제 정보</h3>
          <div className="">
            <h5>결제 방법</h5>
            <p>{data.method}</p>
          </div>
          <div className="">
            <h5>총 결제 금액</h5>
            <p>{data.totalPrice}</p>
          </div>
          <div className="">
            <h5>배송비</h5>
            <p>{data.shippingPrice}</p>
          </div>
          <div className="">
            <h5>최종 결제 금액</h5>
            <p>{data.amount}</p>
          </div>
        </span>
      </section>
    </main>
  );
}
