import { ItemCardType } from "@/types/items/ItemCard";
import Image from "next/image";
import Cart from "../icons/Cart";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function GiftItemCard({ 
  item, authStatus }: { item: ItemCardType, authStatus: boolean }) {
  // 서버에서 미리 좋아요 여부를 가져옴

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
            authStatus={authStatus}
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
