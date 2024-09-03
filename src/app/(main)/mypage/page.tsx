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
    <>
      <p className="text-xl my-1 mx-2">{a}님</p>
      <p className="mx-2 font-extrabold">스타벅스에서 즐거운 쇼핑 되세요 !</p>

      <div className="rounded-xl mx-4 bg-gray-100 m-2 text-sm">
        최대 7% 어쩌구 나오는 쇼핑
      </div>
      <div className="flex mx-2">
        <div className="w-[30%] items-center flex-col flex text-center border-2 mx-2 border-slate-200 rounded-xl p-2   mb-2">
          <p>쿠폰</p>
          <p>{mycoupon}장</p>
          <Button variant="starbucks" size="s">
            쿠폰함
          </Button>
        </div>
        <div className="w-[30%] items-center flex-col flex text-center border-2 mx-2 border-slate-200 rounded-xl p-2   mb-2">
          <p>일반 별</p>
          <p>{myStar}개</p>
          <Button variant="starbucks" size="s">
            내역보기
          </Button>
        </div>
        <div className="w-[30%] items-center flex-col flex text-center border-2 mx-2 border-slate-200 rounded-xl p-2   mb-2">
          <p>에코 별</p>
          <p>{myEchoStar}개</p>
          <Button variant="starbucks" size="s">
            내역보기
          </Button>
        </div>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
      <div className="">HELLO</div>
    </>
  );
}
