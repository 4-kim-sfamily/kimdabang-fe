import { getCheckBoxList } from "@/actions/cart/checkBox";
import { getProductInfo } from "@/actions/getProductInfo";
import AddressSection from "@/components/pages/cart/AddressSection";
import BottomBar from "@/components/pages/cart/BottomBar";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import PayInfo from "@/components/pages/cart/PayInfo";
import { cartList } from "@/types/items/Cart";
import { ProductType } from "@/types/ResponseType";

export default async function page({ params }: { params: { id: number } }) {
  //체크된 아이템 리스트
  const list: cartList[] = await getCheckBoxList();
  const productList: ProductType[] = await Promise.all(
    list.map((item) => getProductInfo(item.productCode)),
  );

  const totalEstimatedPrice = productList.reduce(
    (total, product) => total + product.productPrice,
    0,
  );
  const shippingfee =
    totalEstimatedPrice >= 30000 ? 0 : totalEstimatedPrice === 0 ? 0 : 3000;

  return (
    <main>
      <AddressSection id={params.id} />
      <div className="px-4">
        <CartItemSection chekedList={list} />
        <PayInfo
          totalEstimatedPrice={totalEstimatedPrice}
          shippingfee={shippingfee}
          count={productList.length}
        />
      </div>
      <BottomBar
        id={params.id}
        count={list.length}
        totalPrice={totalEstimatedPrice + shippingfee}
      />
    </main>
  );
}
