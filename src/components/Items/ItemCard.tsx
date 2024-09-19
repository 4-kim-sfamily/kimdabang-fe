import Image from "next/image";

import { ItemCardType } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";

import { getIsFavorite } from "@/actions/favorite/getIsFavorite";
import { putFavorite } from "@/actions/favorite/putFavorite";
import Link from "next/link";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function ItemCard({ item }: { item: ItemCardType }) {
  const isLiked: boolean = await getIsFavorite(item.productCode);
  return (
    <div className="w-[100%] border-slate-950 flex flex-col justify-start">
      <Link href={`/product/${item.productCode}`}>
        <div className="relative w-full aspect-square">
          <Image
            src={item.productImageUrl}
            alt={item.productName}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">{item.largeCategory}</p>
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
      <p className="font-semibold ">
        {item.productPrice}
        {" 원"}
      </p>
      <ReviewPreview productCode={item.productCode} visible={false} />
    </div>
  );
}
