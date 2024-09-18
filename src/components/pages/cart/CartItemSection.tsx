import { getCartItemList } from "@/actions/cart/getCartItemData";
import CartItem from "@/components/Items/CartItem";
import { cartList } from "@/types/items/Cart";
import CartCheckBox from "./CartCheckBox";

export default async function CartItemSection({}: {}) {
  const data: cartList[] = await getCartItemList();
  return (
    <section className=" mb-4 ">
      {/* <CheckBoxControl /> */}
      {data.map((item) => (
        <div key={item.productCode} className="flex justify-start py-3 gap-2">
          <CartCheckBox productCode={item.productCode} />
          <div className="w-full">
            <CartItem productCode={item.productCode} />
            {/* {item && (
              <CartItemOption amount={item.amount} id={item.productCode} />
            )} */}
          </div>
        </div>
      ))}
    </section>
  );
}
