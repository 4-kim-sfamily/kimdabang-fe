import { JoinForm } from "@/components/forms/JoinForm";
import BackwardArrow from "@/components/ui/BackwardArrow";

export default function page() {
  return (
    <div className="px-2">
      <BackwardArrow />
      <p className="text-2xl font-extrabold mb-16">
        회원가입 정보를
        <br />
        입력해 주세요.
      </p>
      <JoinForm />
    </div>
  );
}
