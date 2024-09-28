import Image from "next/image";

import Cart from "../icons/Cart";

import { getProductInfo } from "@/actions/getProductInfo";
import { getCategoryName } from "@/actions/product/getCategoryName";
import Link from "next/link";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function ReviewItemCard({
  productCode,
  authStatus,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const item = await getProductInfo(productCode);
  const categoryName = await getCategoryName(item.categoryId.toString());
  return (
    <li className="w-[100%] border-slate-950 flex justify-start">
      <div className="relative w-[112px] aspect-square">
        <Link href={`/product/${productCode}`}>
          <Image
            src={item.description}
            alt={item.productName}
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="flex flex-col px-4">
        <div className="flex justify-between ">
          <p className="text-[#777777] text-[12px] pt-1 ">{categoryName}</p>
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

        <ReviewPreview productCode={item.productCode} visible={true} />
      </div>
    </li>
  );
}
