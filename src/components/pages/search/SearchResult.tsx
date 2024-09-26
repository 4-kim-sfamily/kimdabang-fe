import { getItemCardInfo } from "@/actions/getItemCardInfo";
import { searchByName } from "@/actions/search/searchByName";
import ItemCard from "@/components/Items/ItemCard";

export default async function SearchResult({
  keyword,
  authStatus,
}: {
  keyword: string;
  authStatus: boolean;
}) {
  const data = await searchByName(keyword);
  // getItemCardInfo의 결과를 저장할 배열
  const resultCardInfoList = await Promise.all(
    data.map((item) => getItemCardInfo(item.productCode)),
  );
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {resultCardInfoList.map((item, index) => (
        <ItemCard key={index} item={item} authStatus={authStatus} />
      ))}
    </div>
  );
}
