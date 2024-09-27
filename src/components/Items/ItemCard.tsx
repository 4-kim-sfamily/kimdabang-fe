import Image from "next/image";

import Cart from "../icons/Cart";

import { getItemCardInfo } from "@/actions/getItemCardInfo";
import { FavoriteType } from "@/types/ResponseType";
import Link from "next/link";
import ItemHearts from "../icons/ItemHearts";

export default async function ItemCard({
  item,
  authStatus,
}: {
  item: FavoriteType;
  authStatus: boolean;
}) {
  const favoriteItem = await getItemCardInfo(item.productCode);
  // const categoryName = await getCategoryName(item.categoryId);
  return (
    <li className="w-[100%] border-slate-950 flex flex-col justify-start">
      <Link href={`/product/${item.productCode}`}>
        <div className="relative w-full overflow-hidden aspect-square">
          <Image
            src={favoriteItem.productImageUrl}
            alt={favoriteItem.productName}
            width={500}
            height={500}
            priority
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">
          {favoriteItem.categoryId}
        </p>
        <div className="flex gap-2">
          <ItemHearts productCode={item.productCode} authStatus={authStatus} />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{favoriteItem.productName}</p>
      <p className="font-semibold ">
        {favoriteItem.productPrice}
        {" 원"}
      </p>
      {/* <ReviewPreview productCode={item.productCode} visible={false} /> */}
    </li>
  );
}
