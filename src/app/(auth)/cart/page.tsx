import CartItemSection from "@/components/pages/cart/CartItemSection";
import { CartItemType } from "@/types/items/Cart";

export default async function page() {
  const res = await fetch("http://localhost:4000/cartItemList", {
    cache: "no-store",
  });
  const cartItemList: CartItemType[] = await res.json();
  return <CartItemSection items={cartItemList} />;
}
