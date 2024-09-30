import { getSeasonMedia } from "@/actions/main/season";
import MainBestItem from "@/components/pages/main/MainBestItem";
import MainBestReviewProduct from "@/components/pages/main/MainBestReviewProduct";
import MainCategory from "@/components/pages/main/MainCategory";
import MainGiftProduct from "@/components/pages/main/MainGiftProduct";
import MainSeason from "@/components/pages/main/MainSeason";
import MainCarousel from "@/components/ui/MainCarousel";
import { SeasonMediaType } from "@/types/main/CarouselDataType";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Starbucks",
  description: "메인 페이지입니다.",
};

export default async function Home() {
  const data: SeasonMediaType[] = await getSeasonMedia();
  const session = await getServerSession();

  const authStatus = session?.user ? true : false;
  return (
    <main className="w-[100%]">
      <MainCarousel carouselData={data} />
      <div className="px-[4.1vw]">
        <MainCategory />
        <MainSeason SeasonData={data} />
        <MainGiftProduct authStatus={authStatus} />
        <MainBestReviewProduct authStatus={authStatus} />
        <MainBestItem authStatus={authStatus} />
      </div>
    </main>
  );
}
