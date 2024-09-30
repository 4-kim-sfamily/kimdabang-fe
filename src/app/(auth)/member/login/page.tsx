import LoginForm from "@/components/forms/LoginForm";
import LoginOptions from "@/components/pages/login/LoginOptions";
import SocialLoginButtons from "@/components/pages/login/SocialLoginButtons";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "로그인 페이지입니다.",
};

export default function Page({
  searchParams,
}: {
  searchParams: { autoLogin: boolean };
}) {
  return (
    <>
      <div className="font-NanumSquare justify-between px-5">
        <WelcomeMessage MessageType="login" />
        <LoginForm autoLogin={searchParams.autoLogin} />
        <SocialLoginButtons />
        <LoginOptions />
      </div>
    </>
  );
}
