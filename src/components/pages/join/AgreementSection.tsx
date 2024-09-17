import AgreementCheckbox from "./AgreementCheckbox";

export default function AgreementSection({
  title,
  agreements,
  checkedState,
  onChange,
}) {
  return (
    <div>
      <h2>{title}</h2>
      {agreements.map(({ id, label, name }) => (
        <AgreementCheckbox
          key={id}
          id={id}
          label={label}
          checked={checkedState[name]}
          onCheckedChange={(checked) => onChange(name, checked)}
        />
      ))}
    </div>
  );
}
