import { Checkbox } from "@/components/ui/checkbox";
import DeleteCartItem from "./DeleteCartItem";

export default function CheckBoxControl({
  isChecked,
  onClickCheckButton,
  checkedItems,
}: {
  isChecked: boolean;
  onClickCheckButton: () => void;
  checkedItems: { [productCode: string]: boolean };
}) {
  //선택된 상품 코드
  const selectedProductCodes = Object.entries(checkedItems)
    .filter(([, isChecked]) => isChecked)
    .map(([productCode]) => productCode);
  //모든 상품 코드
  const allProductCodes = Object.entries(checkedItems).map(
    ([productCode]) => productCode,
  );

  return (
    <ul className="flex items-center justify-between">
      <li className="flex items-center">
        <Checkbox checked={isChecked} onClick={onClickCheckButton} />
        <p>전체 선택</p>
      </li>
      <li className="flex gap-1">
        <DeleteCartItem selectedProductCodes={selectedProductCodes}>
          선택삭제
        </DeleteCartItem>
        <p>|</p>
        <DeleteCartItem selectedProductCodes={allProductCodes}>
          전체삭제
        </DeleteCartItem>
      </li>
    </ul>
  );
}
