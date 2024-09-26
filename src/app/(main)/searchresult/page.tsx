import { options } from "@/app/api/auth/[...nextauth]/options";
import SearchResult from "@/components/pages/search/SearchResult";
import SearchSkeleton from "@/components/pages/search/SearchSkeleton";
import SearchBar from "@/components/ui/SearchBar";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

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
      <Suspense fallback={<SearchSkeleton />}>
        <SearchResult keyword={searchParams.query} authStatus={auth} />
      </Suspense>
    </div>
  );
}
