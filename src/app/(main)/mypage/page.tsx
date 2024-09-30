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
