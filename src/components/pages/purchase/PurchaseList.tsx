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
      {purchaseList?.map((Order, index) => (
        <section
          key={index}
          className=" w-full p-4 border-b-8 border-[#b9b9b957]"
        >
          <div className="flex justify-between my-3">
            <h1 className="font-extrabold">
              {new Date(Order.purchaseDate).toISOString().split("T")[0]}
            </h1>
            <Link
              href={`/mypage/purchase-history/${Order.purchaseCode}`}
              className="text-gray-500"
            >
              주문상세{` >`}
            </Link>
          </div>
          {Order.itemList.map((item) => (
            <PurchaseItem item={item} />
          ))}
        </section>
      ))}
    </>
  );
}
