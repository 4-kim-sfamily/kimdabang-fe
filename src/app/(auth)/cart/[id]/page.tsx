import AddressSection from "@/components/pages/cart/AddressSection";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import { CartItemType } from "@/types/items/Cart";

export default async function page() {
  const res = await fetch("http://localhost:4000/cartItemList", {
    cache: "force-cache",
  });
  const cartItemList: CartItemType[] = await res.json();
  return (
    <main className="px-4">
      <AddressSection />
      <CartItemSection items={cartItemList} />
    </main>
  );
}
