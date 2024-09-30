import { getSeasonMedia } from "@/actions/main/season";
import CarouselModal from "@/components/pages/modal/CarouselModal";
import { SeasonMediaType } from "@/types/main/CarouselDataType";
export default async function Page({ params }: { params: { id: string } }) {
  const carouselData: SeasonMediaType[] = await getSeasonMedia();
  return (
    <>
      <main className="w-full">
        <CarouselModal carouselData={carouselData} id={params.id} />
      </main>
    </>
  );
}
