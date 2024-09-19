import { useAgreement } from "@/app/context/AgreementContext";
import { Button } from "@/components/ui/button";
import AgreementAllCheck from "./AgreementAllCheck";
import AgreementSection from "./AgreementSection";
import { optionalAgreements, requiredAgreements } from "./agreements";

export default function AgreementBox({ onAgree }) {
  const { agreementData, setAgreementData } = useAgreement();

  // 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setAgreementData((prevState) => ({
      ...prevState,
      [name]: checked,
      ...(name === "adChecked" && {
        emailChecked: checked,
        smsChecked: checked,
      }),
    }));
  };

  // 전체 동의 체크박스 핸들러
  const handleAllAgreeChange = (checked: boolean) => {
    setAgreementData({
      termsChecked: checked,
      privacyChecked: checked,
      cardChecked: checked,
      adChecked: checked,
      emailChecked: checked,
      smsChecked: checked,
    });
  };

  const allRequiredChecked =
    agreementData.termsChecked &&
    agreementData.privacyChecked &&
    agreementData.cardChecked;

  const allChecked = Object.values(agreementData).every((checked) => checked);

  const handleSubmit = () => {
    onAgree(agreementData);
  };

  return (
    <div>
      {/* 전체 동의 컴포넌트 */}
      <AgreementAllCheck checked={allChecked} onChange={handleAllAgreeChange} />

      <hr className="my-4" />

      {/* 필수 약관 컴포넌트 */}
      <AgreementSection
        title="필수 약관"
        agreements={requiredAgreements} // 동의 항목 주입
        checkedState={agreementData}
        onChange={handleCheckboxChange}
      />

      <hr className="my-4" />

      {/* 선택 약관 컴포넌트 */}
      <AgreementSection
        title="선택 약관"
        agreements={optionalAgreements} // 동의 항목 주입
        checkedState={agreementData}
        onChange={handleCheckboxChange}
      />

      {/* 다음 버튼 */}
      <Button
        variant={allRequiredChecked ? "starbucks" : "disabled"}
        disabled={!allRequiredChecked}
        className="flex mx-auto mt-12"
        onClick={handleSubmit}
      >
        다음
      </Button>
    </div>
  );
}
