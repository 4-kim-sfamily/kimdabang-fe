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
      <div className="grid grid-cols-2 gap-4 px-4">
        {seasonProductList.map((item, index) => (
          <ItemCard key={index} productCode={item} authStatus={false} />
        ))}
      </div>
    </>
  );
}
