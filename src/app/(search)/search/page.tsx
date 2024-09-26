import SearchName from "@/components/pages/search/SearchName";
import SearchBar from "@/components/ui/SearchBar";

export default function page() {
  return (
    <div className="">
      <SearchBar placeholder="원하시는 상품을 검색해보세요." visible={true} />
      <SearchName />
    </div>
  );
}
