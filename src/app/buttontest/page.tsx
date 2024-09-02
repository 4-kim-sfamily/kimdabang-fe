import Cart from "@/components/icons/Cart";
import Present from "@/components/icons/Present";
import { Button } from "@/components/ui/button";

export default function page() {
  "use Client";
  const handleCartBtn = () => {};
  return (
    <div className="w-full flex flex-col ">
      <Button variant="starbucks">로그인하기</Button>
      <div className="justify-around">
        <Button variant="starbucks" size="sm">
          <div className="pr-1">
            <Cart HandleClickButton={handleCartBtn} />
          </div>
          선물하기
        </Button>
        <Button variant="inversion" size="sm">
          <div className="pr-2">
            <Present></Present>
          </div>
          <span>구매하기</span>
        </Button>
      </div>
    </div>
  );
}
