"use client";
import CartItem from "@/components/Items/CartItem";
import { CartItemType } from "@/types/items/Cart";
import CartCheckBox from "./CartCheckBox";
import CheckBoxControl from "./CheckBoxControl";

export default function CartItemSection({ items }: { items: CartItemType[] }) {
  return (
    <section>
      <CheckBoxControl />
      {items.map((item) => (
        <div key={item.productCode} className="flex justify-start p-3 gap-2">
          <CartCheckBox
            productCode={item.productCode}
            isChecked={item.isChecked}
          />
          <CartItem item={item} />
        </div>
      ))}
    </section>
  );
}
