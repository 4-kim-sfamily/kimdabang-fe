import React, { createContext, ReactNode, useContext, useState } from "react";

// userData 타입 정의
interface userData {
  id: string;
  password: string;
  name: string;
  nickname: string;
  gender: string;
  birth: Date;
  solar: boolean;
  email: string;
  phone: string;
}

// 상태의 타입 정의
interface AgreementData {
  termsChecked: boolean;
  privacyChecked: boolean;
  cardChecked: boolean;
  emailChecked: boolean;
  smsChecked: boolean;
  userData: userData;
}

// Context 타입 정의
interface AgreementContextType {
  agreementData: AgreementData;
  setAgreementData: React.Dispatch<React.SetStateAction<AgreementData>>;
}

const AgreementContext = createContext<AgreementContextType | undefined>(
  undefined,
);

// userData 초기값 정의
const initialUserData: userData = {
  id: "",
  password: "",
  name: "",
  nickname: "",
  gender: "",
  phone: "",
  birth: new Date(), // 초기값으로 현재 시간을 설정, 필요 시 수정 가능
  solar: true, // 기본값으로 양력 설정
  email: "",
};

export function AgreementProvider({ children }: { children: ReactNode }) {
  // agreementData 초기 상태 정의
  const [agreementData, setAgreementData] = useState<AgreementData>({
    termsChecked: false,
    privacyChecked: false,
    cardChecked: false,
    emailChecked: false,
    smsChecked: false,
    userData: initialUserData, // userData 초기값 설정
  });

  return (
    <AgreementContext.Provider value={{ agreementData, setAgreementData }}>
      {children}
    </AgreementContext.Provider>
  );
}

// Hook으로 Context 사용
export function useAgreement() {
  const context = useContext(AgreementContext);
  if (!context) {
    throw new Error("AgreementProvider에러");
  }
  return context;
}
