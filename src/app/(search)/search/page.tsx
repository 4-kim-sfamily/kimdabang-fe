import SearchName from "@/components/pages/search/SearchName";
import SearchBar from "@/components/ui/SearchBar";

export default function page() {
  return (
    <div className="">
      <SearchBar placeholder="검색어를 입력하세요" />
      <SearchName />
    </div>
  );
}
