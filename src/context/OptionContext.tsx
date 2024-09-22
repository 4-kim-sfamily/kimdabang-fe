"use client";
import { createContext, ReactNode, useContext, useState } from "react";

// Context 생성
const OptionContext = createContext<{
  selectedButton: number;
  handleClick: (index: number) => void;
} | null>(null);

// Provider 컴포넌트
export function OptionContextprovider({ children }: { children: ReactNode }) {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  // 클릭 핸들러
  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <OptionContext.Provider value={{ selectedButton, handleClick }}>
      {children}
    </OptionContext.Provider>
  );
}

// Context 사용을 쉽게 하기 위한 훅
export function useButtonGroup() {
  const context = useContext(OptionContext);
  if (!context) {
    throw new Error("useButtonGroup must be used within a ButtonGroupProvider");
  }
  return context;
}
