import { JoinForm } from "@/components/forms/JoinForm";

export default function UserDataForm({ onNext }) {
  // 동의 여부 확인하여 리다이렉트 처리

  return (
    <div className="px-2">
      <p className="text-2xl font-extrabold mb-8">
        회원가입 정보를
        <br />
        입력해 주세요.
      </p>
      <JoinForm onNext={onNext} />
    </div>
  );
}
