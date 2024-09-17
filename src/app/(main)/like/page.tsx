import { getFavoriteList } from "@/actions/getFavoriteList";
import { getItemCardInfo } from "@/actions/getItemCardInfo";
import ItemCard from "@/components/Items/ItemCard";

export default async function page() {
  // 1. 좋아요 리스트를 가져옴
  const favoriteListCode = await getFavoriteList();

  // 2. getItemCardInfo를 사용해 제품 정보를 모두 가져옴
  const favoriteList = await Promise.all(
    favoriteListCode.map(async (favorite) => {
      const res = await getItemCardInfo(favorite.productCode);
      if (res.productPrice === undefined) {
        res.productPrice = 50000; // 가격이 없으면 기본값으로 50000 설정
      }
      console.log("productImage값:", res.productImageUrl);
      return res; // 각 상품 정보 반환
    }),
  );

  return (
    <div>
      <header>
        <h1 className="text-2xl mb-4">내가 좋아요한 상품목록</h1>
      </header>
      <div className="grid grid-cols-4 gap-4  px-4">
        {favoriteList.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
