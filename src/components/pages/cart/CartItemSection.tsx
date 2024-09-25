import { getCheckBox } from "@/actions/cart/checkBox";
import { getCartItemList } from "@/actions/cart/getCartItemData";
import CartItem from "@/components/Items/CartItem";
import { cartList } from "@/types/items/Cart";
import Link from "next/link";
import CartCheckBox from "./CartCheckBox";
import CheckBoxControl from "./CheckBoxControl";

export default async function CartItemSection({
  chekedList,
}: {
  chekedList: cartList[];
}) {
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
    <section className="mb-4">
      <CheckBoxControl
        allCheckBox={allChecked}
        cartItemList={data}
        checkBoxStatuses={checkBoxStatuses}
        chekedList={chekedList}
      />
      {data.length === 0 ? (
        <div className="flex flex-col items-center py-4">
          <h5 className="text-center py-5 text-lg">
            장바구니에 담긴 아이템이 없습니다
          </h5>
          <Link href="/" className=" text-center text-starbucks">
            쇼핑하러 가기
          </Link>
        </div>
      ) : (
        data.map((item, index) => (
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
            </div>
          </div>
        ))
      )}
    </section>
  );
}
