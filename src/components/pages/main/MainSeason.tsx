import SeasonCard from "@/components/main/SeasonCard";
import { SeasonMediaType } from "@/types/main/CarouselDataType";
import Link from "next/link";

export default async function MainSeason({
  SeasonData,
}: {
  SeasonData: SeasonMediaType[];
}) {
  return (
    <ul className="flex place-items-baseline gap-2 w-[100%] overflow-x-auto scroll-item whitespace-nowrap">
      {SeasonData.filter(
        (item) => item.mediaType === "running-season-thumbsImg",
      ).map((item) => (
        <Link href={`/season/${item.seasonId}`}>
          <SeasonCard key={item.seasonId} item={item} />
        </Link>
      ))}
    </ul>
  );
}
