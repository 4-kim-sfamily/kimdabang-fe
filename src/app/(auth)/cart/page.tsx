import AddressSection from "@/components/pages/cart/AddressSection";
import BottomBar from "@/components/pages/cart/BottomBar";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import PayInfo from "@/components/pages/cart/PayInfo";

export default async function page() {
  return (
    <main>
      <AddressSection />
      <div className="px-4">
        <CartItemSection />
        <PayInfo />
      </div>
      <BottomBar />
    </main>
  );
}
