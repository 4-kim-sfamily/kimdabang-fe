import Image from "next/image";

import ItemCardList from "../../lib/dummy/items/ItemCardList.json";
import Cart from "../icons/Cart";
import Hearts from "../icons/Hearts";

import ReviewPreview from "./ReviewPreview";

export default function ItemCard() {
  "use client";

  const handleCartBtn = () => {
    console.log("상품 좋아요");
  };
  return (
    <div className="flex flex-wrap gap-3 sm:justify-between md:justify-start p-3">
      {ItemCardList.itemCard.map((item) => (
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
            <div className="text-[#777777] text-[12px] pt-2">
              {item.largeCategory}
            </div>
            <div className="flex gap-2">
              <Hearts HandleClickButton={handleCartBtn} color="black" />
              <Cart HandleClickButton={handleCartBtn} color="black" />
            </div>
          </div>
          <p className="text-[13px]">{item.ProductName}</p>
          <div className="font-semibold">{item.price}원</div>
          <ReviewPreview productCode={item.ProductCode} />
        </div>
      ))}
    </div>
  );
}
