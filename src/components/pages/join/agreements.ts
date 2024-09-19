// 필수 및 선택 동의 항목 데이터
export const requiredAgreements = [
  {
    id: "terms-agree",
    label: "[필수] 이용약관 동의",
    name: "termsChecked",
  },
  {
    id: "privacy-agree",
    label: "[필수] 개인정보 수집 및 이용동의",
    name: "privacyChecked",
  },
  {
    id: "card-agree",
    label: "[필수] 카드 이용약관 동의",
    name: "cardChecked",
  },
];

export const optionalAgreements = [
  {
    id: "ad-agree",
    label: "[선택] 광고성 정보 수신 동의",
    name: "adChecked",
  },
  {
    id: "email-agree",
    label: "E-mail 수신 동의",
    name: "emailChecked",
  },
  {
    id: "sms-agree",
    label: "SMS 수신 동의",
    name: "smsChecked",
  },
];
