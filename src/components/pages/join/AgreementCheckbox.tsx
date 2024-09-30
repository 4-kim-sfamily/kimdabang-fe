import { Checkbox } from "@/components/ui/checkbox";

interface AgreementCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function AgreementCheckbox({
  id,
  label,
  checked,
  onCheckedChange,
}: AgreementCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="peer"
      />
      <label htmlFor={id} className="peer-checked:text-green-600">
        {label}
      </label>
    </div>
  );
}
