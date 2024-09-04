import CouponStarGroup from "@/components/pages/mypage/CouponStarGroup";
import MyPageAdvertisement from "@/components/pages/mypage/MyPageAdvertisement";
import MyPageCoupon from "@/components/pages/mypage/MyPageCoupon";
import MyPageTitle from "@/components/pages/mypage/MyPageTitle";
import MyStarAmount from "@/components/pages/mypage/MyStarAmount";
import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default async function page() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  //   SLIDE개수 와 SLIDE 내부 컨탠츠 결정하기
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className="px-[4.1vw] font-NanumSquare">
      <MyPageTitle username="김범규" />
      <MyPageAdvertisement />

      <CouponStarGroup>
        <MyPageCoupon />
        <MyStarAmount starType="regular" />
        <MyStarAmount starType="echo" />
      </CouponStarGroup>

      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      <section>
        <header className="flex justify-between font-bold my-2">
          <h2>주문/배송 조회</h2>
          <Button variant="inversion" size="free" className="p-2 text-xs">
            배송지 관리
          </Button>
        </header>
        <ul className="flex justify-between whitespace-nowrap text-[1rem] text-gray-500">
          <li className="delivery-state">
            <div />
            <p>주문 접수</p>
          </li>
          <li className="flex items-center mb-4"> ▶ </li>
          <li className="delivery-state">
            <div />
            <p>결제 완료</p>
          </li>
          <li className="flex items-center mb-4"> ▶ </li>
          <li className="delivery-state ">
            <div />
            <p>상품준비중</p>
          </li>
          <li className="flex items-center mb-4"> ▶ </li>
          <li className="delivery-state">
            <div />
            <p>배송중</p>
          </li>
          <li className="flex items-center mb-4"> ▶ </li>
          <li className="delivery-state">
            <div />
            <p>배송완료</p>
          </li>
        </ul>
      </section>

      <section className="flex justify-between my-2 text-[0.7rem] rounded-xl bg-gray-200 p-2 mb-2 text-gray-500">
        <div className="flex w-20 justify-between">
          <span>취소</span>
          <span>0</span>
        </div>
        <div className="flex w-20 justify-between">
          <span>교환</span>
          <span>0</span>
        </div>
        <div className="flex w-20 justify-between">
          <span>반품</span>
          <span>0</span>
        </div>
        <div className="flex w-20 justify-between">
          <span>구매확정</span>
          <span>0</span>
        </div>
      </section>

      <button className="py-3 w-full text-[0.7rem] text-center border-gray-300 border- rounded-full">
        주문/배송 조회 보러가기›
      </button>
      <section>
        <h3 className="bg-[#006241] text-lg text-white">자주 찾는 메뉴</h3>
        <div className="mt-2 grid grid-cols-5 gap-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col text-[0.7rem] ">
        <header className=" bg-[#006241] text-lg text-white font-bold mt-2 mb-4">
          나의 주문관리
        </header>
        <div className="text-gray-400 flex flex-row gap-[50%]">
          <ul className="flex flex-col space-y-2">
            <li>주문/배송조회</li>
            <li>항공권 예약조회</li>
            <li>선물함</li>
            <li>정기배송 설정 관리</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li>구매내역</li>
            <li>호텔 예약조회</li>
            <li>자주구매 상품</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
