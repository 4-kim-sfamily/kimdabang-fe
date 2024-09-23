import React, { createContext, ReactNode, useContext, useState } from "react";

// userData 타입 정의
interface UserData {
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

interface ProviderInfo {
  provider: string;
  providerAccountId: string;
}

// Context 타입 정의
interface AgreementContextType {
  agreementData: AgreementData;
  setAgreementData: React.Dispatch<React.SetStateAction<AgreementData>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  providerInfo: ProviderInfo;
  setProviderInfo: React.Dispatch<React.SetStateAction<ProviderInfo>>;
}

const AgreementContext = createContext<AgreementContextType | undefined>(
  undefined,
);

// userData 초기값 정의
const initialUserData: UserData = {
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

// providerInfo 초기값 정의
const initialProviderInfo: ProviderInfo = {
  provider: "",
  providerAccountId: "",
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

  // providerInfo 상태 정의
  const [providerInfo, setProviderInfo] =
    useState<ProviderInfo>(initialProviderInfo);

  // userData 상태 정의
  const [userData, setUserData] = useState<UserData>(initialUserData);

  return (
    <AgreementContext.Provider
      value={{
        agreementData,
        setAgreementData,
        userData,
        setUserData,
        providerInfo,
        setProviderInfo,
      }}
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
