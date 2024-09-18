import AgreementCheckbox from "./AgreementCheckbox";

export default function AgreementAllCheck({ checked, onChange }) {
  return (
    <AgreementCheckbox
      id="all-agree"
      label="약관 전체 동의"
      checked={checked}
      onCheckedChange={onChange}
    />
  );
}
