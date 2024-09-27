import { getItemCardInfo } from "@/actions/getItemCardInfo";
import { getSeasonMediaById } from "@/actions/main/season";
import { getSeasonProduct } from "@/actions/product/getSeasonProduct";
import ItemCard from "@/components/Items/ItemCard";
import Image from "next/image";
export default async function page({
  params,
}: {
  params: { seasonId: string };
}) {
  const seasonMedia = await getSeasonMediaById(Number(params.seasonId));
  const seasonProductList = await getSeasonProduct(params.seasonId);
  const resultCardInfoList = await Promise.all(
    seasonProductList.map((item) => getItemCardInfo(item)),
  );
  return (
    <>
      <div className="w-full overflow-hidden mb-4">
        <Image
          src={seasonMedia.mediaURL}
          alt={seasonMedia.imageName}
          width={2000}
          height={2000}
          className="object-cover"
          priority
        ></Image>
      </div>
      <ul className="grid grid-cols-2 gap-4 px-4">
        {resultCardInfoList.map((item, index) => (
          <li>
            <ItemCard key={index} item={item} authStatus={false} />
          </li>
        ))}
      </ul>
    </>
  );
}
