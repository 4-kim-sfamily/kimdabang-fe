"use client";
import CartItem from "@/components/Items/CartItem";
import { CartItemType } from "@/types/items/Cart";
import { useEffect, useState } from "react";
import CartCheckBox from "./CartCheckBox";
import CheckBoxControl from "./CheckBoxControl";

export default function CartItemSection({ items }: { items: CartItemType[] }) {
  const [checkedItems, setCheckedItems] = useState<{
    [productCode: string]: boolean;
  }>({});
  const [checkedAll, setCheckedAll] = useState(false);
  const onClickCheckButton = (productCode: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [productCode]: !prev[productCode],
    }));
  };

  //전체 선택
  const selectAll = () => {
    const newCheckedItems = items.reduce(
      (acc, item) => {
        acc[item.productCode] = checkedAll ? false : true;
        setCheckedAll(!checkedAll);
        return acc;
      },
      {} as { [productCode: string]: boolean },
    );

    setCheckedItems(newCheckedItems);
  };

  //fetch로 받아온 값 초기값으로 설정
  useEffect(() => {
    const initialCheckedItems = items.reduce(
      (acc, item) => {
        acc[item.productCode] = item.isChecked;
        return acc;
      },
      {} as { [productCode: string]: boolean },
    );

    setCheckedItems(initialCheckedItems);
  }, []);

  //개별 체크박스 모두 선택 시 전체선택도 true
  useEffect(() => {
    const allChecked = items.every((item) => checkedItems[item.productCode]);
    setCheckedAll(allChecked);
  }, [checkedItems, items.length]);

  return (
    <section>
      <CheckBoxControl
        checkedItems={checkedItems}
        isChecked={checkedAll}
        onClickCheckButton={selectAll}
      />
      {items.map((item) => (
        <div key={item.productCode} className="flex justify-start p-3 gap-2">
          <CartCheckBox
            onClickCheckButton={onClickCheckButton}
            productCode={item.productCode}
            isChecked={!!checkedItems[item.productCode]}
          />
          <CartItem item={item} />
        </div>
      ))}
    </section>
  );
}
