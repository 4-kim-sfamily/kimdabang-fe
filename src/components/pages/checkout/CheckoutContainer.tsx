import { getCheckedCartItem } from "@/actions/cart/getCartItemData";
import { getProductInfo } from "@/actions/getProductInfo";
import {
  getAddressById,
  getShippingAddressDefault,
} from "@/actions/shipping/shippingActions";
import { Button } from "@/components/ui/button";
import { cartList } from "@/types/items/Cart";
import { ProductType, shippingAddressType } from "@/types/ResponseType";
import Link from "next/link";
import AddressSection from "../cart/AddressSection";
import CouponSection from "./CouponSection";
import MyOrderItemList from "./MyOrderItemList";
import OrderPrice from "./OrderPrice";
import PaymentMethodSection from "./PaymentMethodSection";

export default async function CheckoutContainer({
  type,
  productCode,
  optionId,
  amount,
  addressId,
}: {
  type: string;
  productCode?: string;
  optionId?: string;
  amount?: number;
  addressId?: number;
}) {
  let productData: ProductType;
  let price: number = 0;
  let productDataList: ProductType[] = [];
  let cartList: cartList[];
  let addressData: shippingAddressType;
  if (type === "buyNow" && productCode && optionId) {
    productData = await getProductInfo(productCode);
    // 제품 이름 / 가격 / 썸네일 / 옵션
    price = productData.productPrice * amount;
    productDataList.push(productData); // buyNow의 경우에는 단일 제품이므로 리스트에 추가
  } else if (type === "cart") {
    // 카트에서 여러 개의 제품 정보를 받아옴
    cartList = await getCheckedCartItem();
    // 각 카트 아이템의 productCode로 getProductInfo 호출 후 productDataList에 저장
    const productDataPromises = cartList.map(async (item) => {
      const productData = await getProductInfo(item.productCode);
      return productData;
    });

    // 비동기 요청들을 모두 처리
    productDataList = await Promise.all(productDataPromises);

    // 카트의 각 제품 가격을 합산
    productDataList.forEach((product, index) => {
      price += product.productPrice * cartList[index].amount;
    });
  } else {
  }
  if (addressId) {
    addressData = await getAddressById(addressId);
  }
  const isAddress = await getShippingAddressDefault();
  let isAvailable = true;
  if (!isAddress) {
    isAvailable = false;
  } else {
    addressData = isAddress;
  }
  return (
    <div className="mt-20 px-4 flex flex-col gap-4">
      {isAddress ? (
        <section>
          <p className="font-bold text-2xl -mb-10">배송지</p>
          <AddressSection id={addressId} />
        </section>
      ) : (
        <Link href={"/shipping/addShippingAddress"}>
          <Button className="py-4 mx-auto text-red-600">
            배송지를 등록해주세요
          </Button>
        </Link>
      )}
      <section>
        <p className="font-bold text-2xl">주문 내역</p>
        <MyOrderItemList
          productData={productData}
          optionId={optionId}
          amount={amount}
          productDataList={productDataList}
          cartlist={cartList}
        />
        {/* 주문 정보 들어갈 곳 */}
      </section>
      <hr />
      <CouponSection />
      <hr />
      <section>
        <p className="font-bold text-2xl"> 결제수단 </p>
        <PaymentMethodSection />
      </section>
      <hr />
      <section>
        <p className="font-bold text-2xl"> 주문금액 </p>
        <OrderPrice
          price={price}
          productData={productData}
          productDataList={productDataList}
          cartList={cartList}
          optionId={optionId}
          amount={amount}
          addressData={addressData}
          isAvailable={isAvailable}
        />
      </section>
    </div>
  );
}
