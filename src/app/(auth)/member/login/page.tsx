import LoginForm from "@/components/forms/LoginForm";
import LoginOptions from "@/components/pages/login/LoginOptions";
import SocialLoginButtons from "@/components/pages/login/SocialLoginButtons";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";

export default function Page() {
  return (
    <>
      <div className="font-NanumSquare justify-between px-5">
        <WelcomeMessage MessageType="login" />
        <LoginForm />
        <SocialLoginButtons />
        <LoginOptions />
      </div>
    </>
  );
}
