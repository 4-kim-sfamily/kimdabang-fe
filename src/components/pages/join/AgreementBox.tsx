"use client";
import { useAgreement } from "@/app/context/AgreementContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AgreementCheckbox from "./AgreementCheckbox";

export default function AgreementBox() {
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [cardChecked, setCardChecked] = useState(false);
  const [adChecked, setAdChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);

  const { setAgreementData } = useAgreement();
  const router = useRouter();

  // 전체 동의 체크박스 클릭 시 모든 체크박스 상태 변경
  const handleAllAgreeChange = (checked: boolean) => {
    setAllChecked(checked);
    setTermsChecked(checked);
    setPrivacyChecked(checked);
    setCardChecked(checked);
    setAdChecked(checked);
    setEmailChecked(checked);
    setSmsChecked(checked);
  };

  const handleSubmit = () => {
    setAgreementData((prev) => ({
      ...prev,
      termsChecked: termsChecked,
      privacyChecked: privacyChecked,
      cardChecked: cardChecked,
      emailChecked: emailChecked,
      smsChecked: smsChecked,
    }));
    router.push("/member/join/verification");
  };

  // 광고성 정보 수신 동의 클릭 시 E-mail과 SMS 동의 상태 변경
  const handleAdAgreeChange = (checked: boolean) => {
    setAdChecked(checked);
    setEmailChecked(checked);
    setSmsChecked(checked);
  };

  // E-mail 체크박스 클릭했을때 위에 광고성 정보도 자동으로 체크
  const handleEmailChange = (checked: boolean) => {
    setEmailChecked(checked);
    if (checked) {
      setAdChecked(true);
    }
  };
  // SMS 체크박스 클릭했을때 위에 광고성 정보도 자동으로 체크
  const handleSmsChange = (checked: boolean) => {
    setSmsChecked(checked);
    if (checked) {
      setAdChecked(true);
    }
  };

  // 필수 항목들이 모두 체크되었는지 확인
  const allRequiredChecked = termsChecked && privacyChecked && cardChecked;

  return (
    <div>
      {/* 약관 전체동의 */}
      <div className="flex items-center space-x-2 my-6">
        <AgreementCheckbox
          id="all-agree"
          label="약관 전체동의"
          checked={allChecked}
          onCheckedChange={handleAllAgreeChange}
        />
      </div>
      <hr />

      <section className="flex flex-col gap-6 mt-4 justify-center mb-4">
        <AgreementCheckbox
          id="terms-agree"
          label="[필수] 이용약관 동의"
          checked={termsChecked}
          onCheckedChange={(checked) => setTermsChecked(checked)}
        />

        <AgreementCheckbox
          id="privacy-agree"
          label="[필수] 개인정보 수집 및 이용동의"
          checked={privacyChecked}
          onCheckedChange={(checked) => setPrivacyChecked(checked)}
        />

        <AgreementCheckbox
          id="card-agree"
          label="[필수] 스타벅스 카드 이용약관"
          checked={cardChecked}
          onCheckedChange={(checked) => setCardChecked(checked)}
        />

        {/* 광고성 정보 수신 동의 */}
        <div className="flex flex-col space-y-2">
          <AgreementCheckbox
            id="ad-agree"
            label="[선택] 광고성 정보 수신 동의"
            checked={adChecked}
            onCheckedChange={handleAdAgreeChange}
          />

          {/* 하위 E-mail, SMS 체크박스 */}
          <div className="ml-6 space-y-2">
            <AgreementCheckbox
              id="email-agree"
              label="E-mail 수신 동의"
              checked={emailChecked}
              onCheckedChange={handleEmailChange}
            />

            <AgreementCheckbox
              id="sms-agree"
              label="SMS 수신 동의"
              checked={smsChecked}
              onCheckedChange={handleSmsChange}
            />
          </div>
        </div>
      </section>
      <hr />
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
