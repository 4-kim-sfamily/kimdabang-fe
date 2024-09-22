"use client";
import { createContext, useContext } from "react";

// Context 생성: 기본값을 Session | null로 설정
export const SessionContext = createContext<boolean | null>(null);

// 커스텀 훅
export const useSession = () => useContext(SessionContext);
