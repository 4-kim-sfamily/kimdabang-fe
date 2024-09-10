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

export default async function page() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  //   SLIDE개수 와 SLIDE 내부 컨탠츠 결정하기
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className=" font-NanumSquare p-4">
      <MyPageTitle />
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
