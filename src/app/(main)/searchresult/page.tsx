import { options } from "@/app/api/auth/[...nextauth]/options";
import SearchResult from "@/components/pages/search/SearchResult";
import SearchBar from "@/components/ui/SearchBar";
import { ItemCardSkeleton } from "@/components/ui/skeleton";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { query: string };
}): Promise<Metadata> {
  return {
    title: `${searchParams.query} 검색 결과`,
    description: `${searchParams.query} 검색 결과입니다.`,
  };
}

export default async function page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const session = await getServerSession(options);
  const auth = session ? true : false;
  return (
    <div>
      <SearchBar placeholder={""} visible={false} />
      <Suspense fallback={<ItemCardSkeleton />}>
        <SearchResult keyword={searchParams.query} authStatus={auth} />
      </Suspense>
    </div>
  );
}
