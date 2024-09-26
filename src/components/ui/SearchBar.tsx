"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
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
    // pathname --> 현재 주소 지금은 /dashboard/invoices
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0  p-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-5 top-1/2 h-[1.5rem] w-[1.5rem] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button onClick={handleCloseClick}>
        <X />
      </button>
    </div>
  );
}
