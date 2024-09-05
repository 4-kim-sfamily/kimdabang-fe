import SeasonCard from "@/components/main/SeasonCard";
import { RunningSeason } from "@/types/main/RunningSeasonDataType";

export default async function MainSeason() {
  const res = await fetch("http://localhost:4000/SeasonData", {
    cache: "no-store",
  });
  const SeasonData: RunningSeason[] = await res.json();
  return (
    <section className="flex place-items-baseline gap-2 w-[100%] overflow-x-auto scroll-item whitespace-nowrap">
      {SeasonData.map((item) => (
        <SeasonCard key={item.id} item={item} />
      ))}
    </section>
  );
}
