"use client";
import KaKaoPayIcon from "@/components/icons/payment/KaKaoPayIcon";
import TossPayIcon from "@/components/icons/payment/TossPayIcon";
import { useCheckout } from "@/context/CheckoutContext";
import { CreditCard } from "lucide-react";
import { useState } from "react";

export default function PaymentMethodSection() {
  const { setSelectedPaymentMethod } = useCheckout();
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const handlePaymentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const method = e.currentTarget.value || "";
    setSelectedMethod(method);
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="grid grid-cols-4 gap-4 items-center mt-4">
      <button
        value="TossPay"
        onClick={handlePaymentClick}
        className={`${
          selectedMethod === "TossPay"
            ? "border-blue-500 bg-blue-100"
            : "border-gray-400"
        } flex flex-col gap-2 items-center border-2 pt-2`}
      >
        <TossPayIcon />
        <p className="whitespace-nowrap">토스페이</p>
      </button>

      <button
        value="KaKaoPay"
        onClick={handlePaymentClick}
        className={`${
          selectedMethod === "KaKaoPay"
            ? "border-blue-500 bg-blue-100"
            : "border-gray-400"
        } flex flex-col gap-2 items-center border-2 pt-2`}
      >
        <KaKaoPayIcon />
        <p className="whitespace-nowrap">카카오페이</p>
      </button>

      <button
        value="Billing"
        onClick={handlePaymentClick}
        className={`${
          selectedMethod === "Billing"
            ? "border-blue-500 bg-blue-100"
            : "border-gray-400"
        } flex flex-col gap-2 items-center border-2 pt-2`}
      >
        <CreditCard size={50} color="black" strokeWidth={1} />
        <p className="whitespace-nowrap">계좌이체</p>
      </button>
    </div>
  );
}
