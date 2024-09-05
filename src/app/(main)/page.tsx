import BottomNavBar from "@/components/layouts/BottomNavBar";
import MainBestItem from "@/components/pages/main/MainBestItem";
import MainBestReviewProduct from "@/components/pages/main/MainBestReviewProduct";
import MainCategory from "@/components/pages/main/MainCategory";
import MainGiftProduct from "@/components/pages/main/MainGiftProduct";
import MainSeason from "@/components/pages/main/MainSeason";
import MainCarousel from "@/components/ui/MainCarousel";
import { CarouselDataType } from "@/types/main/CarouselDataType";

export default async function Home() {
  const res = await fetch("http://localhost:4000/carouselData", {
    cache: "no-store",
  });
  const carouselData: CarouselDataType[] = await res.json();
  return (
    <main className="w-[100%]">
      <MainCarousel carouselData={carouselData} />
      <div className="px-[4.1vw]">
        <MainCategory />
        <MainSeason />
        <MainGiftProduct />
        <MainBestReviewProduct />
        <MainBestItem />
        <BottomNavBar />
      </div>
    </main>
  );
}
