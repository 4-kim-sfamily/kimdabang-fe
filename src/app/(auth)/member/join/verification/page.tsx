"use client"; // 클라이언트 컴포넌트임을 명시

import { useAgreement } from "@/app/context/AgreementContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // App Router용 useRouter
import { useEffect } from "react";

export default function VerificationPage() {
  const { agreementData } = useAgreement();
  const router = useRouter();

  useEffect(() => {
    if (!agreementData.termsChecked || !agreementData.privacyChecked) {
      router.push("/member/join"); // 동의하지 않았을 경우 join 페이지로 리다이렉트
    }
  }, [agreementData, router]);

  const handleSubmit = async () => {
    router.push("/member/join/joinForm");
  };
  const handleVerifiaction = async () => {
    const res = await fetch("https://cert.toss.im");
    const aa = await res.json();
  };
  return (
    <div>
      <h1>본인 인증 페이지</h1>
      <Button variant="disabled" onClick={handleVerifiaction}>
        인증하기
      </Button>
      <Button variant="starbucks" onClick={handleSubmit}>
        인증했다치고 넘어가기
      </Button>
    </div>
  );
}
