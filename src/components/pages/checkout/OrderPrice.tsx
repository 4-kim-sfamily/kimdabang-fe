"use client";
import { postCheckout } from "@/actions/checkout/checkoutActions";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/CheckoutContext";
import { cartList } from "@/types/items/Cart";
import { checkoutRequestType } from "@/types/RequestType";
import { ProductType, shippingAddressType } from "@/types/ResponseType";
import { useEffect, useState } from "react";

export default function OrderPrice({
  price,
  productDataList,
  cartList,
  productData,
  optionId,
  amount,
  addressData,
}: {
  price: number;
  productDataList?: ProductType[];
  cartList?: cartList[];
  productData?: ProductType;
  optionId?: string;
  amount?: number;
  addressData: shippingAddressType;
}) {
  const {
    discountPrice,
    shippingPrice,
    setShippingPrice,
    selectedCoupon,
    setDiscountPrice,
    paymentAmount,
    setPaymentAmount,
    selectedPaymentMethod,
  } = useCheckout();

  // items를 저장할 로컬 상태 추가
  const [items, setItems] = useState<
    {
      productCode: string;
      optionsId: number;
      options: string;
      quantity: number;
      price: number;
    }[]
  >([]);

  // 쿠폰이나 가격이 변경될 때마다 동작하는 useEffect 추가
  useEffect(() => {
    // 배송비 설정
    price > 30000 ? setShippingPrice(0) : setShippingPrice(3000);

    // 쿠폰 적용 로직
    if (selectedCoupon) {
      if (selectedCoupon.couponInfo.couponType === "할인률 쿠폰") {
        console.log("할인률 쿠폰임");
        setDiscountPrice(price * (selectedCoupon.couponInfo.value / 100));
      } else {
        console.log("할인 금액 쿠폰임");
        setDiscountPrice(selectedCoupon.couponInfo.value);
      }
    } else {
      console.log("쿠폰 없음");
      setDiscountPrice(0); // 쿠폰이 없을 경우 할인 금액을 0으로 설정
    }
  }, [price, selectedCoupon, setDiscountPrice, setShippingPrice]);

  // paymentAmount를 동적으로 계산
  useEffect(() => {
    const totalAmount = price + shippingPrice - discountPrice;
    setPaymentAmount(totalAmount); // 총 금액 업데이트
  }, [price, shippingPrice, discountPrice, setPaymentAmount]);

  // productDataList와 cartList로 items 배열 생성
  useEffect(() => {
    let newItems;
    if (productDataList && cartList) {
      console.log("장바구니 구매로 들어옴");
      newItems = productDataList.map((item, index) => ({
        productCode: item.productCode,
        optionsId: cartList[index].productOptionId,
        options: "", // 옵션 이름을 사용
        quantity: cartList[index].amount,
        price: item.productPrice,
      }));
    } else {
      console.log("단일상품구매로 들어옴");
      newItems = [
        {
          productCode: productData.productCode,
          optionsId: optionId,
          options: "", // 옵션 이름을 사용
          quantity: amount,
          price: productData?.productPrice,
        },
      ]; // 배열로 감싸줌
    }

    setItems(newItems); // items 상태 업데이트
  }, [productDataList, cartList]);

  const handleClick = async () => {
    try {
      const data: checkoutRequestType = {
        address: addressData.address,
        name: addressData.addressName,
        phone: addressData.phone,
        couponId: selectedCoupon ? selectedCoupon.couponInfo.id : 0,
        method: selectedPaymentMethod,
        totalPrice: price,
        discountPrice: discountPrice,
        shippingPrice: shippingPrice,
        amount: paymentAmount,
        items, // 생성된 items 배열을 여기 넣음
      };
      await postCheckout(data); // 비동기 호출에 await 추가
      alert("결제가 완료되었습니다!");
    } catch (error) {
      alert("결제에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <div className="flex justify-between px-4 mt-2">
        <p>상품 금액 : </p>
        <p>{price.toLocaleString("ko-KR")}원</p>
      </div>
      <div className="flex justify-between px-4 mt-2">
        <p>배송비 : </p>
        <p>{shippingPrice.toLocaleString("ko-KR")}원</p>
      </div>
      <div className="flex justify-between px-4 mt-2">
        <p>할인 금액 : </p>
        <p>{discountPrice.toLocaleString("ko-KR")}원</p>
      </div>
      <div className="flex justify-between px-4 mt-2">
        <p>총 금액 : </p>
        <p className="font-bold text-2xl">
          {paymentAmount.toLocaleString("ko-KR")}원
        </p>
      </div>

      <hr />
      <Button
        onClick={handleClick}
        variant="starbucks"
        className="mx-auto mt-4"
      >
        {`${paymentAmount.toLocaleString("ko-KR")}`}원 결제하기
      </Button>
    </>
  );
}
