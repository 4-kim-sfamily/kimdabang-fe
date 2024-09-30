"use client"; // 클라이언트 컴포넌트임을 명시

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Verification({ onNext }) {
  const [isVerifying, setIsVerifying] = useState(false); // 인증 진행 중 상태 관리

  // 동의 여부 확인하여 리다이렉트 처리

  // 본인 인증 요청 처리
  const handleVerification = async () => {
    setIsVerifying(true); // 인증 진행 중 상태로 변경
    try {
      const res = await fetch("https://cert.toss.im"); // 실제 인증 요청
      if (res.ok) {
        const data = await res.json();
        // 성공 시 처리
        // 인증 성공 후 처리 로직 추가
      } else {
        console.error("인증 실패:", res.statusText);
      }
    } catch (error) {
      console.error("인증 요청 중 오류 발생:", error);
    } finally {
      setIsVerifying(false); // 인증 완료 후 상태 해제
    }
  };

  // 인증을 완료했다고 가정하고 다음 단계로 이동
  const handleSubmit = () => {
    onNext();
  };

  return (
    <div>
      <h1>본인 인증 페이지</h1>

      {/* 인증하기 버튼 */}
      <Button
        variant={isVerifying ? "disabled" : "starbucks"} // 인증 중일 때 버튼 비활성화
        onClick={handleVerification}
        disabled={isVerifying} // 인증 중일 때 클릭 방지
      >
        {isVerifying ? "인증 중..." : "인증하기"}
      </Button>

      {/* 인증을 건너뛰고 다음 단계로 이동 */}
      <Button variant="starbucks" onClick={handleSubmit}>
        인증했다치고 넘어가기
      </Button>
    </div>
  );
}
