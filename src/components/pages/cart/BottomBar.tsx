import PaymentButtons from "./PaymentButtons";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 bg-white w-full px-5 py-3 top-shadow">
      <span className="flex justify-between py-3">
        <div className="flex gap-1">
          <p>총</p>
          <p className="text-starbucks">1</p>
          <p>건</p>
        </div>
        <p className="text-xl font-extrabold">45,000원</p>
      </span>
      <div>
        <PaymentButtons />
      </div>
    </div>
  );
}
