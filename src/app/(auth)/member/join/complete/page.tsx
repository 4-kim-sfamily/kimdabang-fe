"use client";
import { useAgreement } from "@/app/context/AgreementContext";

export default function page() {
  const user = useAgreement().agreementData;
  return <div>아무것도안떠?{user.userData.username}</div>;
}
