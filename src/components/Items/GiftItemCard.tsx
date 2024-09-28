import { getProductInfo } from "@/actions/getProductInfo";
import { getCategoryName } from "@/actions/product/getCategoryName";
import Image from "next/image";
import Link from "next/link";
import Cart from "../icons/Cart";
import ItemHearts from "../icons/ItemHearts";
import ReviewPreview from "./ReviewPreview";

export default async function GiftItemCard({
  productCode,
  authStatus,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const item = await getProductInfo(productCode);
  const categoryName = await getCategoryName(item.categoryId.toString());

  return (
    <div className=" border-slate-950 flex flex-col justify-start w-[224px]">
      <div className="relative w-[100%] aspect-square h-[224px]">
        <Link href={`/product/${productCode}`}>
          <Image
            src={item.description}
            alt={item.productName}
            width={500}
            height={500}
            priority
          />
        </Link>
      </div>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">{categoryName}</p>
        <div className="flex gap-2">
          <ItemHearts productCode={item.productCode} authStatus={authStatus} />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{item.productName}</p>
      <p className="font-semibold ">
        {item.productPrice.toLocaleString("ko-KR")}원
      </p>
      <ReviewPreview productCode={item.productCode} visible={false} />
    </div>
  );
}
