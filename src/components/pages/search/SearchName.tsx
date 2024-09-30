"use client";
import { searchByName } from "@/actions/search/searchByName";
import { SearchResultType } from "@/types/ResponseType";
import { ArrowUpLeft } from "lucide-react";
import Link from "next/link"; // Next.js의 Link 컴포넌트 임포트
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchName() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string | null>(
    searchParams.get("query")?.toString(),
  );
  const [searchResult, setSearchResult] = useState<SearchResultType[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // URL의 query 파라미터가 변경될 때마다 query 값을 설정
    setQuery(searchParams.get("query")?.toString());
  }, [searchParams]);

  useEffect(() => {
    const getResult = async () => {
      if (!query || query.trim() === "") {
        // query가 없거나 빈 문자열일 경우 검색 결과를 초기화하고 리턴
        setSearchResult(null);
        return;
      }

      setLoading(true); // 검색 시작
      const result: SearchResultType[] = await searchByName(query);
      setSearchResult(result);
      setLoading(false); // 검색 완료
    };

    getResult();
  }, [query]); // query 값이 변경될 때마다 검색 실행

  return (
    <div>
      <ul className="px-12 flex-col gap-4">
        {loading ? (
          <li>검색 중...</li>
        ) : searchResult && searchResult.length > 0 ? (
          searchResult.map((result) => (
            <li className="my-4 " key={result.productCode}>
              <section className="flex justify-between items-center mb-2">
                <Link href={`/product/${result.productCode}`}>
                  <p>{result.productName}</p>
                </Link>
                <ArrowUpLeft color="#6b7280" strokeWidth={1} />
              </section>
              <hr />
            </li>
          ))
        ) : query && searchResult && searchResult.length === 0 ? (
          <li>검색결과가 없습니다.</li>
        ) : (
          query && <li>원하시는 상품을 검색해보세요.</li> // query가 없을 경우 아무것도 표시하지 않음
        )}
      </ul>
    </div>
  );
}
