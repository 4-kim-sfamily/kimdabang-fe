// app/signup/page.tsx
"use client";

import Agreement from "@/components/pages/join/Agreement";
import UserDataForm from "@/components/pages/join/UserDataForm";
import Verification from "@/components/pages/join/Verification";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  "약관동의",
  "본인인증",
  "개인정보 입력",
  "추가정보 입력",
  "가입완료",
];

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stepLevel = parseInt(searchParams.get("step") || "0", 10);

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
      {steps[stepLevel] === "개인정보 입력" && <UserDataForm />}
    </div>
  );
}
