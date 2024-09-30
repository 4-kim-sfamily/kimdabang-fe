import { getItemCardInfo } from "@/actions/getItemCardInfo";
import { getCategoryName } from "@/actions/product/getCategoryName";
import Image from "next/image";
import Link from "next/link";
import Cart from "../icons/Cart";
import ItemHearts from "../icons/ItemHearts";

export default async function ItemCard({
  productCode,
  authStatus,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const cardItem = await getItemCardInfo(productCode);
  const categoryName = await getCategoryName(cardItem.categoryId);
  return (
    <section className="w-[100%] border-slate-950 flex flex-col justify-start">
      <Link href={`/product/${productCode}`}>
        <div className="relative w-full overflow-hidden aspect-square">
          <Image
            src={cardItem.productImageUrl}
            alt={cardItem.productName}
            width={500}
            height={500}
            priority
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">{categoryName}</p>
        <div className="flex gap-2">
          <ItemHearts productCode={productCode} authStatus={authStatus} />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{cardItem.productName}</p>
      <p className="font-semibold ">
        {cardItem.productPrice.toLocaleString("ko-KR")}
        {" 원"}
      </p>
      {/* <ReviewPreview productCode={item.productCode} visible={false} /> */}
    </section>
  );
}
