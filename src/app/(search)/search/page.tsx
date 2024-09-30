import SearchName from "@/components/pages/search/SearchName";
import SearchBar from "@/components/ui/SearchBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "검색",
  description: "원하시는 상품을 검색해보세요.",
};

export default function page() {
  return (
    <div className="">
      <SearchBar placeholder="원하시는 상품을 검색해보세요." visible={true} />
      <SearchName />
    </div>
  );
}
