import Image from "next/image";

import { ItemCardProps } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";
import Hearts from "../icons/Hearts";

import ReviewPreview from "./ReviewPreview";

export default function ItemCard({ item, rate, reviewCnt }: ItemCardProps) {
  "use client";
  const handleCartBtn = () => {
    console.log("상품 좋아요");
  };
  return (
    <div className="w-[calc(50%-8px)] sm:w-[calc(25%-12px)]">
      <div className="relative w-full aspect-square">
        <Image
          src={item.imgUrl}
          alt={item.ProductName}
          fill
          style={{ objectFit: "cover" }}
          className="bg-orange-100"
        />
      </div>
      <div className="flex justify-between">
        <p className="text-[#777777] text-[12px] pt-2">{item.largeCategory}</p>
        <div className="flex gap-2">
          <Hearts HandleClickButton={handleCartBtn} color="black" />
          <Cart HandleClickButton={handleCartBtn} color="black" />
        </div>
      </div>
      <p className="text-[13px]">{item.ProductName}</p>
      <p className="font-semibold">{item.price}원</p>
      {rate != 0 && reviewCnt != 0 && (
        <ReviewPreview rate={rate} reviewCnt={reviewCnt} />
      )}
    </div>
  );
}
