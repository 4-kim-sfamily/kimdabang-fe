import AddressSection from "@/components/pages/cart/AddressSection";
import BottomBar from "@/components/pages/cart/BottomBar";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import PayInfo from "@/components/pages/cart/PayInfo";
import { CartItemType } from "@/types/items/Cart";

export default async function page({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:4000/cartItemList", {
    cache: "force-cache",
  });
  const cartItemList: CartItemType[] = await res.json();
  return (
    <main>
      <AddressSection id={parseInt(params.id, 10)} />
      <div className="px-4">
        <CartItemSection items={cartItemList} />
        <PayInfo />
      </div>
      <BottomBar />
    </main>
  );
}
