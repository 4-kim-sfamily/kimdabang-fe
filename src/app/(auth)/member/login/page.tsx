import LoginForm from "@/components/forms/LoginForm";
import LoginOptions from "@/components/pages/login/LoginOptions";
import SocialLoginButtons from "@/components/pages/login/SocialLoginButtons";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";
import BackwardArrow from "@/components/ui/BackwardArrow";

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
