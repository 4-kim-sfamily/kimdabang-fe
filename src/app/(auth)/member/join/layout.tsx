"use client";
import { AgreementProvider } from "@/app/context/AgreementContext";

export default function MyApp({ children }: { children: React.ReactNode }) {
  return <AgreementProvider>{children}</AgreementProvider>;
}
