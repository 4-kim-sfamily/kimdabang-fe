import { getShippingAddressList } from "@/actions/shipping/shippingActions";
import ShippingSelectSection from "@/components/pages/shipping/ShippintSelectSection";
import Link from "next/link";

export default async function page() {
  //배송지 리스트 fetch
  const data = await getShippingAddressList();
  return (
    <main className="">
      <p className="text-2xl font-extrabold pt-4 pl-4">배송지 선택</p>
      <div className="relative">
        <Link
          href={"/shipping/addShippingAddress"}
          className="absolute right-4 text-starbucks mb-2"
        >
          + 새 배송지 추가
        </Link>
      </div>
      <ShippingSelectSection data={data} />
    </main>
  );
}
