import Image from "next/image";

import { ItemCardType } from "@/types/items/ItemCard";

import Cart from "../icons/Cart";

import Link from "next/link";
import ItemHearts from "../icons/ItemHearts";

export default async function ItemCard({
  item,
  authStatus,
}: {
  item: ItemCardType;
  authStatus: boolean;
}) {
  // const categoryName = await getCategoryName(item.categoryId);
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
        <p className="text-[#777777] text-[12px] pt-1 ">{item.categoryId}</p>
        <div className="flex gap-2">
          <ItemHearts productCode={item.productCode} authStatus={authStatus} />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{item.productName}</p>
      <p className="font-semibold ">
        {item.productPrice}
        {" 원"}
      </p>
      {/* <ReviewPreview productCode={item.productCode} visible={false} /> */}
    </div>
  );
}
