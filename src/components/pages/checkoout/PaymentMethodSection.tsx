import KaKaoPayIcon from "@/components/icons/payment/KaKaoPayIcon";
import TossPayIcon from "@/components/icons/payment/TossPayIcon";

export default function PaymentMethodSection() {
  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      <div className="flex flex-col gap-2 items-center m-4">
        <TossPayIcon />
        <p className="whitespace-nowrap">토스페이</p>
      </div>
      <div className="flex flex-col items-center m-4">
        <KaKaoPayIcon />
        <p className="whitespace-nowrap">카카오페이</p>
      </div>
      <div className="flex flex-col items-center m-4">
        <KaKaoPayIcon />
        <p className="whitespace-nowrap">카카오페이</p>
      </div>
    </div>
  );
}
