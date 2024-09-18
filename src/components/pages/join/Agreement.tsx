import AgreementBox from "@/components/pages/join/AgreementBox";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";

export default function Agreement({ onNext }) {
  const handleAgree = () => {
    // 약관 동의 후에 다음 단계로 이동
    onNext();
  };

  return (
    <main className="px-4">
      <WelcomeMessage MessageType="join" />
      <AgreementBox onAgree={handleAgree} />
    </main>
  );
}
