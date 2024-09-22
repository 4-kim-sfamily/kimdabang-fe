import { getSeasonMedia } from "@/actions/main/season";
import MainBestItem from "@/components/pages/main/MainBestItem";
import MainBestReviewProduct from "@/components/pages/main/MainBestReviewProduct";
import MainCategory from "@/components/pages/main/MainCategory";
import MainGiftProduct from "@/components/pages/main/MainGiftProduct";
import MainSeason from "@/components/pages/main/MainSeason";
import MainCarousel from "@/components/ui/MainCarousel";
import { SeasonMediaType } from "@/types/main/CarouselDataType";

export default async function Home() {
  const data: SeasonMediaType[] = await getSeasonMedia();
  return (
    <main className="w-[100%]">
      <MainCarousel carouselData={data} />
      <div className="px-[4.1vw]">
        <MainCategory />
        <MainSeason SeasonData={data} />
        <MainGiftProduct />
        <MainBestReviewProduct />
        <MainBestItem />
      </div>
    </main>
  );
}
