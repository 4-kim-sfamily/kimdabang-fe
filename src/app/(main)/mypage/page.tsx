import { options } from "@/app/api/auth/[...nextauth]/options";
import BottomNavBar from "@/components/layouts/BottomNavBar";
import {
  CouponStarGroup,
  DeliveryStateList,
  FavoiriteMenu,
  ManageOrder,
  MyDeliveryButton,
  MyPageAdvertisement,
  MyPageTitle,
  ProductStateList,
} from "@/components/pages/mypage";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { getServerSession } from "next-auth/next";

export default async function page() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const session = await getServerSession(options);
  const username = session?.user?.name || "GUEST";

  //   SLIDE개수 와 SLIDE 내부 컨탠츠 결정하기
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className=" font-NanumSquare">
      <MyPageTitle username={username} />
      <MyPageAdvertisement />
      <CouponStarGroup />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <DeliveryStateList />
      <ProductStateList />
      <MyDeliveryButton />
      <FavoiriteMenu />
      <ManageOrder />
      <BottomNavBar />
    </main>
  );
}
