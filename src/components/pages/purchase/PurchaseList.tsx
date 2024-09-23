import Link from "next/link";
import PurchaseItem from "./PurchaseItem";

export default function PurchaseList() {
  return (
    <section className="mb-8 w-full">
      <div className="flex justify-between my-3">
        <h1 className="font-extrabold">24.03.07</h1>
        <Link href={`/mypage/purchase-history/1`} className="text-gray-500">
          주문상세{` >`}
        </Link>
      </div>
      <PurchaseItem />
    </section>
  );
}
