import { Purchase } from "@/types/ResponseType";
import Link from "next/link";
import PurchaseItem from "./PurchaseItem";

export default function PurchaseList({
  purchaseList,
}: {
  purchaseList: Purchase[];
}) {
  console.log(purchaseList);
  return (
    <>
      {purchaseList?.map((item, index) => (
        <section key={index} className="mb-8 w-full">
          <div className="flex justify-between my-3">
            <h1 className="font-extrabold">{item.purchaseDate}</h1>
            <Link href={`/mypage/purchase-history/1`} className="text-gray-500">
              주문상세{` >`}
            </Link>
          </div>
          <PurchaseItem />
        </section>
      ))}
    </>
  );
}
