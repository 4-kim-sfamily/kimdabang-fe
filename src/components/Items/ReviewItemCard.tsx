import Image from "next/image";

import { ItemCardType } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";

import { getIsFavorite } from "@/actions/favorite/getIsFavorite";
import { putFavorite } from "@/actions/favorite/putFavorite";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function ReviewItemCard({ item }: { item: ItemCardType }) {
  const isLiked: boolean = await getIsFavorite(item.productCode);

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
            <ItemHearts
              productCode={item.productCode}
              isLiked={isLiked} // 서버에서 받아온 데이터 전달
              putFavorite={putFavorite}
            />
            <Cart color="black" />
          </div>
        </div>
        <p className="text-[13px] ">{item.productName}</p>
        <p className="font-semibold ">{item.productPrice}</p>

        <ReviewPreview productCode={item.productCode} visible={true} />
      </div>
    </li>
  );
}
