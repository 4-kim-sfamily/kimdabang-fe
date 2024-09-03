import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
export default function page() {
  const a = "김범규";
  const mycoupon: number = 1;
  const myStar: number = 2;
  const myEchoStar: number = 2;
  const OPTIONS: EmblaOptionsType = { loop: true };

  //   SLIDE개수 와 SLIDE 내부 컨탠츠 결정하기
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className="px-[4.1vw]">
      <header>
        <h2 className="text-xl my-1">{a}님</h2>
        <h3 className=" font-extrabold">스타벅스에서 즐거운 쇼핑 되세요 !</h3>
      </header>

      {/* 캐러셀로 변경예정 */}
      <div className="rounded-xl  py-1.5 bg-gray-100 m-2 text-sm">
        최대 7% 어쩌구 나오는 쇼핑
      </div>

      <section className="flex">
        <article className="mypage-article">
          <p className="font-extrabold">쿠폰</p>
          <p>{mycoupon}장</p>
          <Button variant="starbucks" size="s">
            쿠폰함
          </Button>
        </article>
        <article className="mypage-article">
          <p className="font-extrabold">일반 별</p>
          <p>{myStar}개</p>
          <Button variant="starbucks" size="s">
            내역보기
          </Button>
        </article>
        <article className="mypage-article">
          <p className="font-extrabold">에코 별</p>
          <p>{myEchoStar}개</p>
          <Button variant="starbucks" size="s">
            내역보기
          </Button>
        </article>
      </section>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      <section>
        <header className=" my-2">
          <p className="flex justify-between font-bold">
            <h2>주문/배송 조회</h2>
            <Button variant="inversion" size="free" className="p-2 text-xs">
              배송지 관리
            </Button>
          </p>
        </header>
        <ul className="flex justify-between mx-2 whitespace-nowrap text-[1rem] text-gray-500">
          <li className="flex-col">
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">주문 접수</p>
          </li>
          <li className="flex-col">
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">결제 완료</p>
          </li>
          <li className="flex-col ">
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">상품준비중</p>
          </li>
          <li className="flex-col">
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">배송중</p>
          </li>
          <li className="flex-col">
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">배송완료</p>
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
        <h3 className="font-bold">자주 찾는 메뉴</h3>
        <div className="mt-2 grid grid-cols-5 gap-3">
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
          <div>
            <div className=" p-8 bg-gray-200 rounded-3xl"></div>
            <p className="text-center">좋아요</p>
          </div>
        </div>
      </section>
      <section className=" flex flex-col text-[0.7rem] m-2">
        <h2 className="text-lg font-bold mt-2 mb-4">나의 주문관리</h2>
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
