"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchName() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string | null>(
    searchParams.get("query")?.toString(),
  );
  useEffect(() => {
    setQuery(searchParams.get("query")?.toString());
    //  여기서 검색 결과를 가져오는 로직을 작성합니다.
  }, [searchParams]);

  return (
    <div>
      <h3>{query ? query : "검색어를 입력해주세요"}</h3>
      <p>This is Search Result</p>
    </div>
  );
}
