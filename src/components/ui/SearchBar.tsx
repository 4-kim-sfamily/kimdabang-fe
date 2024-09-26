"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({
  placeholder,
  visible,
}: {
  placeholder: string;
  visible: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleCloseClick = () => {
    router.back();
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const term = (e.target as HTMLInputElement).value;
      handleSearch(term); // Enter 키를 눌렀을 때 검색어 설정

      if (term.trim()) {
        // 입력된 검색어가 있을 때만 리다이렉트 실행
        router.push(`/searchresult?query=${encodeURIComponent(term)}`); // 검색 결과 페이지로 리다이렉트
      }
    }
  };

  const handleFocus = () => {
    if (!visible) {
      const term = searchParams.get("query")?.toString();
      router.push(`/search?query=${encodeURIComponent(term)}`);
    }
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0 p-4 items-center">
      {visible && (
        <button className="mr-2" onClick={handleCloseClick}>
          <ChevronLeft />
        </button>
      )}

      {/* input을 감싸는 컨테이너에 relative 적용 */}
      <div className="relative flex w-full items-center">
        {/* 아이콘과 겹치지 않도록 오른쪽에 padding 추가 */}
        <input
          className="w-full py-3 pl-3 pr-10 text-base rounded-xl bg-gray-100 border-0 outline-none placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown} // Enter 키 감지
          onFocus={handleFocus} // input에 포커스가 들어오면 실행
          defaultValue={searchParams.get("query")?.toString()}
        />
        {/* 아이콘을 input 박스 내부 오른쪽에 배치 */}
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-[1.5rem] w-[1.5rem] text-gray-500" />
      </div>
      {visible && (
        <button
          className="pl-2"
          onClick={() => {
            router.push("/cart");
          }}
        >
          <ShoppingCart />
        </button>
      )}
    </div>
  );
}
