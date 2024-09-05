"use client";
import KakaoLogo from "@/components/icons/KakaoLogo";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SocialLoginButtons() {
  return (
    <Button onClick={() => signIn("kakao")} variant="kakao" className="mx-auto">
      <KakaoLogo />
      <span>카카오로 로그인하기</span>
    </Button>
  );
}
