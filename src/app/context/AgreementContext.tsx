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
  adChecked: boolean;
  emailChecked: boolean;
  smsChecked: boolean;
}

// Context 타입 정의
interface AgreementContextType {
  agreementData: AgreementData;
  setAgreementData: React.Dispatch<React.SetStateAction<AgreementData>>;
  userData: userData;
  setUserData: React.Dispatch<React.SetStateAction<userData>>;
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
  birth: new Date(),
  solar: true,
  email: "",
};

export function AgreementProvider({ children }: { children: ReactNode }) {
  // agreementData 초기 상태 정의
  const [agreementData, setAgreementData] = useState<AgreementData>({
    termsChecked: false,
    privacyChecked: false,
    cardChecked: false,
    adChecked: false,
    emailChecked: false,
    smsChecked: false,
  });

  // userData 상태 정의
  const [userData, setUserData] = useState<userData>(initialUserData);

  return (
    <AgreementContext.Provider
      value={{ agreementData, setAgreementData, userData, setUserData }}
    >
      {children}
    </AgreementContext.Provider>
  );
}

// Hook으로 Context 사용
export function useAgreement() {
  const context = useContext(AgreementContext);
  if (!context) {
    throw new Error("AgreementProvider 에러");
  }
  return context;
}
