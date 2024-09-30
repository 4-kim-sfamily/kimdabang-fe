import { getNotification } from "@/actions/mypage/notice/notice";
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
import { Metadata } from "next/types";
export const metadata: Metadata = {
  title: "마이페이지",
  description: "마이페이지입니다.",
};
export default async function page() {
  const noti = await getNotification();

  return (
    <main className=" font-NanumSquare p-4">
      <MyPageTitle />
      <MyPageAdvertisement />
      <CouponStarGroup />
      <EmblaCarousel slides={noti} />
      <DeliveryStateList />
      <ProductStateList />
      <MyDeliveryButton />
      <FavoiriteMenu />
      <ManageOrder />
      <BottomNavBar />
    </main>
  );
}
