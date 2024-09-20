import { getIsFavorite } from "@/actions/favorite/getIsFavorite";
import { putFavorite } from "@/actions/favorite/putFavorite";
import { ItemCardType } from "@/types/items/ItemCard";
import Image from "next/image";
import Cart from "../icons/Cart";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function GiftItemCard({ item }: { item: ItemCardType }) {
  // 서버에서 미리 좋아요 여부를 가져옴

  const isLiked: boolean = await getIsFavorite(item.productCode);
  return (
    <div className=" border-slate-950 flex flex-col justify-start w-[224px]">
      <div className="relative w-[100%] aspect-square h-[224px]">
        <Image
          src={item.productImageUrl}
          alt={item.productName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
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
      <p className="font-semibold ">{item.productPrice}</p>
      <ReviewPreview productCode={item.productCode} visible={false} />
    </div>
  );
}
