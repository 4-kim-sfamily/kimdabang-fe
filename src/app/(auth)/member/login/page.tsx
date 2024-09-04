"use client"; // 클라이언트 컴포넌트

import LoginForm from "@/components/forms/LoginForm";
import BackwardArrow from "@/components/pages/login/BackwardArrow";
import LoginOptions from "@/components/pages/login/LoginOptions";
import SocialLoginButtons from "@/components/pages/login/SocialLoginButtons";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";

export default function Page() {
  return (
    <div className="font-NanumSquare justify-between">
      <BackwardArrow />
      <WelcomeMessage />
      <LoginForm />
      <SocialLoginButtons />
      <LoginOptions />
    </div>
  );
}
