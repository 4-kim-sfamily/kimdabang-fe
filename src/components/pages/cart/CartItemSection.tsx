import { getCheckBox } from "@/actions/cart/checkBox";
import { getCartItemList } from "@/actions/cart/getCartItemData";
import CartItem from "@/components/Items/CartItem";
import { cartList } from "@/types/items/Cart";
import CartCheckBox from "./CartCheckBox";
import CheckBoxControl from "./CheckBoxControl";

export default async function CartItemSection({}: {}) {
  const data: cartList[] = await getCartItemList();
  const checkBoxStatuses = await Promise.all(
    data.map((item) =>
      getCheckBox({
        productCode: item.productCode,
        productOptionId: item.productOptionId,
      }),
    ),
  );
  const allChecked = checkBoxStatuses.every((status) => status === true);
  return (
    <section className=" mb-4 ">
      <CheckBoxControl isAllChecked={allChecked} />
      {data.map((item, index) => (
        <div key={item.productCode} className="flex justify-start py-3 gap-2">
          <CartCheckBox
            productCode={item.productCode}
            productOptionId={item.productOptionId}
            isChecked={checkBoxStatuses[index]}
          />
          <div className="w-full">
            <CartItem
              productCode={item.productCode}
              productOptionId={item.productOptionId}
            />
            {/* {item && (
              <CartItemOption amount={item.amount} id={item.productCode} />
            )} */}
          </div>
        </div>
      ))}
    </section>
  );
}
