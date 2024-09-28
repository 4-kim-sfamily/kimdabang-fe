import { getSeasonMediaById } from "@/actions/main/season";
import { getSeasonProduct } from "@/actions/product/getSeasonProduct";
import ItemCard from "@/components/Items/ItemCard";
import MainTitle from "@/components/ui/mainTitle";
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
      <Image
        src={seasonMedia.mediaURL}
        alt={seasonMedia.imageName}
        width={2000}
        height={2000}
        className="object-cover w-full overflow-hidden mb-4"
        priority
      />

      <section className="px-4">
        <MainTitle title={seasonMedia.imageName} />
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {seasonProductList.map((item, index) => (
            <li key={index}>
              <ItemCard productCode={item} authStatus={false} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
