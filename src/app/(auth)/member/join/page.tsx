// app/signup/page.tsx
"use client";

import AccountDataForm from "@/components/pages/join/AccountDataForm";
import Agreement from "@/components/pages/join/Agreement";
import JoinSuccess from "@/components/pages/join/JoinSuccess";
import UserDataForm from "@/components/pages/join/UserDataForm";
import Verification from "@/components/pages/join/Verification";
import { useAgreement } from "@/context/AgreementContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const steps = [
  "약관동의",
  "본인인증",
  "개인정보 입력",
  "계정정보 입력",
  "가입완료",
];

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stepLevel = parseInt(searchParams.get("step") || "0", 10);
  const { agreementData, setProviderInfo } = useAgreement();

  useEffect(() => {
    const provider = searchParams.get("provider");
    const providerAccountId = searchParams.get("providerAccountId");

    if (provider && providerAccountId) {
      setProviderInfo({ provider, providerAccountId });
    }

    if (!agreementData.termsChecked || !agreementData.privacyChecked) {
      router.push("/member/join"); // 동의하지 않았을 경우 join 페이지로 리다이렉트
    }
  }, [agreementData, router, searchParams]);

  const onNext = () => {
    router.push(`/member/join?step=${stepLevel + 1}`);
  };

  const onPrev = () => {
    router.push(`/member/join?step=${stepLevel - 1}`);
  };

  return (
    <div>
      <div className="progress-bar text-xs whitespace-nowrap">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`step ${stepLevel >= index ? "completed" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
      {steps[stepLevel] === "약관동의" && <Agreement onNext={onNext} />}
      {steps[stepLevel] === "본인인증" && <Verification onNext={onNext} />}
      {steps[stepLevel] === "개인정보 입력" && <UserDataForm onNext={onNext} />}
      {steps[stepLevel] === "계정정보 입력" && (
        <AccountDataForm onNext={onNext} />
      )}
      {steps[stepLevel] === "가입완료" && <JoinSuccess />}
    </div>
  );
}
