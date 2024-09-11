import { Checkbox } from "@/components/ui/checkbox";

export default function CheckBoxControl() {
  return (
    <ul className="flex items-center justify-between">
      <li className="flex items-center">
        <Checkbox />
        <p>전체 선택</p>
      </li>
      <li className="flex gap-1">
        <button className="">선택삭제</button>
        <p>|</p>
        <button>전체삭제</button>
      </li>
    </ul>
  );
}
