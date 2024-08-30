import Image from "next/image";

import dummyItemCardList from "../Items/dummydata";

import Cart from "../icons/Cart";
import Hearts from "../icons/Hearts";
import ReviewPreview from "./ReviewPreview";
export default function ItemCard() {
  "use client";

  const handleLikeButton = () => {
    console.log("상품 좋아요");
  };
  return (
    <div className="flex flex-wrap gap-3 sm:justify-between md:justify-start p-3">
      {dummyItemCardList.itemCard.map((item) => (
        <div key={item.id} className="w-[calc(50%-8px)] sm:w-[calc(25%-12px)]">
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
            <div className="text-[#777777] text-[12px] pt-2">스타벅스</div>
            <div className="flex gap-2">
              <Hearts HandleLickButton={handleLikeButton} color="black" />
              <Cart HandleLickButton={handleLikeButton} color="black" />
            </div>
          </div>
          <p className="text-[13px]">{item.ProductName}</p>
          <div className="font-semibold">{item.price}원</div>
          <ReviewPreview />
        </div>
      ))}
    </div>
  );
}
