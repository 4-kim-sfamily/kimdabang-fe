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

  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {data.map((item, index) => (
        <ItemCard
          key={index}
          productCode={item.productCode}
          authStatus={authStatus}
        />
      ))}
    </div>
  );
}
