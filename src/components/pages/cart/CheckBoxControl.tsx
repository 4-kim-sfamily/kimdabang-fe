"use client";
import { putCheckBox } from "@/actions/cart/checkBox"; // API 함수
import { Checkbox } from "@/components/ui/checkbox";
import { cartList } from "@/types/items/Cart";
import { useEffect, useState } from "react";
import DeleteCartItemList from "./DeleteCartItemList";

export default function CheckBoxControl({
  cartItemList,
  allCheckBox,
  checkBoxStatuses,
  chekedList,
}: {
  chekedList: cartList[];
  cartItemList: cartList[];
  allCheckBox: boolean;
  checkBoxStatuses: boolean[];
}) {
  const [isAllChecked, setIsAllChecked] = useState(allCheckBox);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(checkBoxStatuses);

  useEffect(() => {
    setIsAllChecked(allCheckBox);
    setCheckedItems(checkBoxStatuses);
  }, [allCheckBox, checkBoxStatuses]);

  const handleToggleAll = async () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);

    const requests = cartItemList.map((item, index) => {
      if (checkedItems[index] !== newCheckedState) {
        return putCheckBox({
          productCode: item.productCode,
          productOptionId: item.productOptionId,
        });
      }
      return Promise.resolve();
    });

    await Promise.all(requests);

    setCheckedItems(cartItemList.map(() => newCheckedState));
  };

  return (
    <ul className="flex items-center justify-between pt-4">
      <li className="flex items-center gap-2">
        <Checkbox checked={isAllChecked} onClick={handleToggleAll} />
        <p>전체 선택</p>
      </li>
      <li className="flex gap-1">
        <DeleteCartItemList productCodeList={chekedList}>
          선택삭제
        </DeleteCartItemList>
        <p>|</p>
        <DeleteCartItemList productCodeList={cartItemList}>
          전체삭제
        </DeleteCartItemList>
      </li>
    </ul>
  );
}
