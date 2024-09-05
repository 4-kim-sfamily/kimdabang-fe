import SeasonCard from "@/components/main/SeasonCard";
import { SeasonData } from "@/lib/dummy/main/RunningSeasonData";

export default function MainSeason() {
  return (
    <section className="flex place-items-baseline gap-2 w-[100%] overflow-x-auto scroll-item whitespace-nowrap">
      {SeasonData.map((item) => (
        <SeasonCard key={item.id} item={item} />
      ))}
    </section>
  );
}
