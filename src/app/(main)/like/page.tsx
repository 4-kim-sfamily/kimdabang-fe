import { getFavoriteList } from "@/actions/favorite/getFavoriteList";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ItemCard from "@/components/Items/ItemCard";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "좋아요",
  description: "좋아요한 상품목록을 확인할 수 있습니다.",
};

export default async function page() {
  // 1. 좋아요 리스트를 가져옴
  const favoriteListCode = await getFavoriteList();
  const session = await getServerSession(options);
  const auth = session?.user ? true : false;

  return (
    <main>
      <h1 className="text-2xl mb-4">내가 좋아요한 상품목록</h1>
      <section>
        <ul className="grid grid-cols-2 gap-4  px-4">
          {favoriteListCode.map((favorite, index) => (
            <Suspense key={index} fallback={<div> Loading..</div>}>
              <ItemCard productCode={favorite.productCode} authStatus={auth} />
            </Suspense>
          ))}
        </ul>
      </section>
    </main>
  );
}
