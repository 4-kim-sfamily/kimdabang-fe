import { CartItemType } from "@/types/items/Cart";
import Image from "next/image";
import CartItemAmount from "../pages/cart/CartItemAmount";
import DeleteCartItem from "../pages/cart/DeleteCartItem";

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <figure className="flex w-full gap-4">
      <div className="relative w-[32%] max-w-24 aspect-square">
        <Image
          src={item.imgUrl}
          alt="digh"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <ul className="w-full">
        <li className="flex w-full justify-between mb-2">
          <p className="font-extrabold">{item.productName}</p>
          <DeleteCartItem />
        </li>
        <li>
          <CartItemAmount
            price={item.price}
            discountedPrice={item.discountedPrice}
            amount={item.amount}
          />
        </li>
      </ul>
    </figure>
  );
}
