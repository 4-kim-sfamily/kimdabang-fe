"use client";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartCheckBox({
  productCode,
  isChecked,
  onClickCheckButton,
}: {
  productCode: string;
  isChecked?: boolean;
  onClickCheckButton?: (productCode: string) => void;
}) {
  //코드를 보내서 isChecked 여부 받아오기
  //서버액션 ~~

  const handleItemCheck = () => {
    // 체크된 상태로 onClickCheckButton 호출
    if (onClickCheckButton) {
      console.log(productCode);
    }
  };
  return (
    <Checkbox checked={isChecked} className="peer" onClick={handleItemCheck} />
  );
}
