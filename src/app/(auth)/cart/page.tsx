import AddressSection from "@/components/pages/cart/AddressSection";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import PayInfo from "@/components/pages/cart/PayInfo";
import { CartItemType } from "@/types/items/Cart";

export default async function page() {
  const res = await fetch("http://localhost:4000/cartItemList", {
    cache: "force-cache",
  });
  const cartItemList: CartItemType[] = await res.json();
  return (
    <main>
      <AddressSection />
      <div className="px-4">
        <CartItemSection items={cartItemList} />
        <PayInfo />
      </div>
    </main>
  );
}
