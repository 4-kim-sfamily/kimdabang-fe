"use client";

import { putCartItem } from "@/actions/cart/getCartItemData";
import { cartList } from "@/types/items/Cart";

interface DeleteCartItemProps {
  children: React.ReactNode;
  productCodeList: cartList[];
}

export default function DeleteCartItemList({
  children,
  productCodeList,
}: DeleteCartItemProps) {
  const handleDeleteButton = async () => {
    if (productCodeList && productCodeList.length > 0) {
      const deleteRequests = productCodeList.map((item) => {
        const request = {
          amount: 0,
          productOptionId: item.productOptionId,
          carving: "",
        };
        return putCartItem({ productCode: item.productCode, request });
      });
      const results = await Promise.all(deleteRequests);
      console.log(results);
    }
  };

  return (
    <button
      onClick={handleDeleteButton}
      className="flex flex-col justify-start z-20"
    >
      {children}
    </button>
  );
}
