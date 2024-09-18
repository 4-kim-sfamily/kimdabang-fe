import JoinAdditionalForm from "@/components/forms/JoinAdditionalForm";

export default function AccountDataForm({ onNext }) {
  return (
    <div className="px-2">
      <p className="text-2xl font-extrabold mb-8">
        계정정보를
        <br />
        입력해 주세요.
      </p>
      <JoinAdditionalForm onNext={onNext} />
    </div>
  );
}
