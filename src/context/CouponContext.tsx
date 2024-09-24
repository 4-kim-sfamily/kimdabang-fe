"use client";
import { CouponType } from "@/types/ResponseType";
import { createContext, ReactNode, useContext, useState } from "react";

// 쿠폰 정보를 담는 타입 정의
type SelectedCouponInfo = {
  couponId: string;
  couponInfo: CouponType;
} | null;

type PaymentContextType = {
  selectedCoupon: SelectedCouponInfo;
  setSelectedCoupon: (coupon: SelectedCouponInfo) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
};

// 쿠폰 컨텍스트 생성
const CouponContext = createContext<PaymentContextType | undefined>(undefined);

// 컨텍스트를 사용할 수 있게 하는 커스텀 훅
export const useCoupon = () => {
  const context = useContext(CouponContext);
  if (!context) {
    throw new Error("useCoupon must be used within a CouponProvider");
  }
  return context;
};

// 컨텍스트 프로바이더
export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCoupon, setSelectedCoupon] =
    useState<SelectedCouponInfo>(null);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  return (
    <CouponContext.Provider
      value={{
        selectedCoupon,
        setSelectedCoupon,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
};
