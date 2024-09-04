import BottomNavBar from "@/components/layouts/BottomNavBar";
import MainBestItem from "@/components/pages/main/MainBestItem";
import MainBestReviewProduct from "@/components/pages/main/MainBestReviewProduct";
import MainCategory from "@/components/pages/main/MainCategory";
import MainGiftProduct from "@/components/pages/main/MainGiftProduct";
import MainSeason from "@/components/pages/main/MainSeason";
export default function Page() {
  return (
    <main className="px-[4.1vw]">
      <MainCategory />
      <MainSeason />
      <MainGiftProduct />
      <MainBestReviewProduct />
      <MainBestItem />
      <BottomNavBar />
    </main>
  );
}
