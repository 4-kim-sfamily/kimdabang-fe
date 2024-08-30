import Cart from "@/components/icons/Cart";
import Present from "@/components/icons/Present";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="w-full flex flex-col ">
      <Button variant="starbucks">로그인하기</Button>
      <Button variant="kakao">카카오 하이</Button>
      <Button variant="disabled">결제 및 선물하기</Button>
      <div className="justify-around">
        <Button variant="starbucks" size="md">
          <div className="pr-2">
            <Present></Present>
          </div>
          선물하기
        </Button>
        <Button variant="inversion" size="md">
          <div className="pr-2">
            <Cart color="#01a862" />
          </div>
          <span>구매하기</span>
        </Button>
        <Button variant="inversion" size="sm" className="text-lg">
          주소검색
        </Button>
      </div>
    </div>
  );
}
