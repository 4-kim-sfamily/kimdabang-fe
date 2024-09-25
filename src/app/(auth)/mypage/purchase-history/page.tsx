import { getMyPurchaseList } from "@/actions/mypage/purchase/purchase";
import PurchaseHeader from "@/components/pages/purchase/PurchaseHeader";
import PurchaseList from "@/components/pages/purchase/PurchaseList";
import { Purchase } from "@/types/ResponseType";
type SearchParams = {
  start: string;
  end: string;
};
export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);
  let DefaultstartDate = searchParams.start
    ? searchParams.start
    : oneYearAgo.toISOString().split("T")[0];
  let DefaultendDate = searchParams.end
    ? searchParams.end
    : today.toISOString().split("T")[0];

  const data: Purchase[] = await getMyPurchaseList({
    start: searchParams.start ? searchParams.start : DefaultstartDate,
    end: searchParams.end ? searchParams.end : DefaultendDate,
  });

  return (
    <main>
      <PurchaseHeader start={searchParams.start} end={searchParams.end} />
      <PurchaseList purchaseList={data} />
    </main>
  );
}
