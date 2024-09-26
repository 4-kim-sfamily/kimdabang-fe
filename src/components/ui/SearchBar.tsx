"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeholder }: { placeholder: string }) {
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

  return (
    <div className="relative flex flex-1 flex-shrink-0 p-4 items-center">
      <button className="mr-2" onClick={handleCloseClick}>
        <ChevronLeft />
      </button>

      {/* input을 감싸는 컨테이너에 relative 적용 */}
      <div className="relative  flex w-full items-center">
        {/* 아이콘과 겹치지 않도록 오른쪽에 padding 추가 */}
        <input
          className="w-full py-3 pl-3 pr-10  text-sm rounded-xl  bg-gray-100 border-0  rounded-lg outline-none placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        {/* 아이콘을 input 박스 내부 오른쪽에 배치 */}
        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-[1.5rem] w-[1.5rem] text-gray-500" />
      </div>
      <button className="pl-2">
        <ShoppingCart />
      </button>
    </div>
  );
}
