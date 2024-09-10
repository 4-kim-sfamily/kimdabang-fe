import AgreementBox from "@/components/pages/join/AgreementBox";
import WelcomeMessage from "@/components/pages/login/WelcomeMessage";
import BackwardArrow from "@/components/ui/BackwardArrow";

export default function page() {
  return (
    <main className="px-4">
      <BackwardArrow />
      <WelcomeMessage MessageType="join"></WelcomeMessage>
      <AgreementBox />
    </main>
  );
}
