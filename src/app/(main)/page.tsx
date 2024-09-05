import BottomNavBar from "@/components/layouts/BottomNavBar";
import MainBestItem from "@/components/pages/main/MainBestItem";
import MainBestReviewProduct from "@/components/pages/main/MainBestReviewProduct";
import MainCategory from "@/components/pages/main/MainCategory";
import MainGiftProduct from "@/components/pages/main/MainGiftProduct";
import MainSeason from "@/components/pages/main/MainSeason";
import MainCarousel from "@/components/ui/MainCarousel";

export default function Home() {
  return (
    <main className="w-full">
      <MainCarousel />
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
