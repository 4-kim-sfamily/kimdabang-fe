import KakaoLogo from "@/components/icons/KakaoLogo";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SocialLoginButtons() {
  return (
    <div className="LoginButtons flex flex-col items-center mt-2">
      <Button
        onClick={() => signIn("kakao")}
        variant="kakao"
        className="items-center"
      >
        <KakaoLogo />
        <span>카카오로 로그인하기</span>
      </Button>
    </div>
  );
}
