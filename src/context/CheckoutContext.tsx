"use client";
import { CouponType } from "@/types/ResponseType";
import { createContext, ReactNode, useContext, useState } from "react";

// 쿠폰 정보를 담는 타입 정의
type SelectedCouponInfo = {
  couponId: string;
  couponInfo: CouponType;
} | null;

type orderItemType = {
  productCode: string;
  optionId: string;
  quantity: number;
};

type PaymentContextType = {
  selectedCoupon: SelectedCouponInfo;
  setSelectedCoupon: (coupon: SelectedCouponInfo) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
  shippingPrice: number;
  setShippingPrice: (price: number) => void;
  totalOrderPrice: number;
  setTotalOrderPrice: (price: number) => void;
  paymentAmount: number;
  setPaymentAmount: (amount: number) => void;
  discountPrice: number;
  setDiscountPrice: (price: number) => void;
};

// 쿠폰 컨텍스트 생성
const CouponContext = createContext<PaymentContextType | undefined>(undefined);

// 컨텍스트를 사용할 수 있게 하는 커스텀 훅
export const useCheckout = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useCoupon must be used within a CouponProvider");
  }
  return context;
};

// 컨텍스트 프로바이더
export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCoupon, setSelectedCoupon] =
    useState<SelectedCouponInfo>(null);

  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [totalOrderPrice, setTotalOrderPrice] = useState<number>(0);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [shippingPrice, setShippingPrice] = useState<number>(3000);
  return (
    <CouponContext.Provider
      value={{
        selectedCoupon,
        setSelectedCoupon,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        shippingPrice,
        setShippingPrice,
        paymentAmount,
        setPaymentAmount,
        totalOrderPrice,
        setTotalOrderPrice,
        discountPrice,
        setDiscountPrice,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
};
