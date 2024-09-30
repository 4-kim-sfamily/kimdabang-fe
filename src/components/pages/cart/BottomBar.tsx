import PaymentButtons from "./PaymentButtons";

export default function BottomBar({
  count,
  totalPrice,
  id,
}: {
  count: number;
  totalPrice: number;
  id?: number;
}) {
  return (
    <div className="fixed bottom-0 bg-white w-full px-5 py-3 top-shadow">
      <span className="flex justify-between py-3">
        <div className="flex gap-1">
          <p>총</p>
          <p className="text-starbucks">{count}</p>
          <p>건</p>
        </div>
        <p className="text-xl font-extrabold">
          {totalPrice.toLocaleString("ko-KR")}원
        </p>
      </span>
      <div>
        <PaymentButtons count={count} id={id} />
      </div>
    </div>
  );
}
