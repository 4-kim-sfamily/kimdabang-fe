import SeasonCard from "@/components/main/SeasonCard";
import { SeasonMediaType } from "@/types/main/CarouselDataType";

export default async function MainSeason({
  SeasonData,
}: {
  SeasonData: SeasonMediaType[];
}) {
  return (
    <section className="flex place-items-baseline gap-2 w-[100%] overflow-x-auto scroll-item whitespace-nowrap">
      {SeasonData.filter(
        (item) => item.mediaType === "running-season-thumbsImg",
      ).map((item) => (
        <SeasonCard key={item.id} item={item} />
      ))}
    </section>
  );
}
