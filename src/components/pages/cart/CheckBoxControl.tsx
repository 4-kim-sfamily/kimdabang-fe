import { Checkbox } from "@/components/ui/checkbox";
import { CartItemType } from "@/types/items/Cart";
import DeleteCartItem from "./DeleteCartItem";

export default function CheckBoxControl({
  cartItemList,
}: {
  cartItemList?: CartItemType[];
}) {
  //
  return (
    <ul className="flex items-center justify-between pt-4">
      <li className="flex items-center gap-2">
        <Checkbox checked={cartItemList.every((item) => item.isChecked)} />
        <p>전체 선택</p>
      </li>
      <li className="flex gap-1">
        <DeleteCartItem apiUri="/선택삭제">선택삭제</DeleteCartItem>
        <p>|</p>
        <DeleteCartItem apiUri="/전체삭제">전체삭제</DeleteCartItem>
      </li>
    </ul>
  );
}
