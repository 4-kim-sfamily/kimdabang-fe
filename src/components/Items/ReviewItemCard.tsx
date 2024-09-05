import Image from "next/image";

import { ItemCardType } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";
import Hearts from "../icons/Hearts";

import ReviewPreview from "./ReviewPreview";

export default function ReviewItemCard({ item }: { item: ItemCardType }) {
  return (
    <li className="w-[100%] border-slate-950 flex justify-start">
      <div className="relative w-[112px] aspect-square">
        <Image
          src={item.productImageUrl}
          alt={item.productName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col px-4">
        <div className="flex justify-between ">
          <p className="text-[#777777] text-[12px] pt-1 ">
            {item.largeCategory}
          </p>
          <div className="flex gap-2">
            <Hearts color="black" />
            <Cart color="black" />
          </div>
        </div>
        <p className="text-[13px] ">{item.productName}</p>
        <p className="font-semibold ">{item.productPrice}</p>

        <ReviewPreview productCode={item.ProductCode} visible={true} />
      </div>
    </li>
  );
}
