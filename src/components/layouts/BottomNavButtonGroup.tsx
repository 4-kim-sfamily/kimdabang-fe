import Cart from "../icons/Cart";
import { Button } from "../ui/button";

// 타입스크립트로 props 타입 정의 (선택 사항)
interface BottomNavButtonGroupProps {
  handleGiftClick: () => void;
  handlePurchaseClick: () => void;
  handleCartClick: () => void;
}

export default function BottomNavButtonGroup({
  handleGiftClick,
  handlePurchaseClick,
  handleCartClick,
}: BottomNavButtonGroupProps) {
  return (
    <ul className="flex justify-around my-2 items-center text-center">
      <li className="pl-2">
        <button type="button" onClick={handleCartClick}>
          <Cart size="32" color="gray" />
        </button>
      </li>
      <section className="flex w-[80%] gap-1 justify-between">
        <li className="w-1/2">
          <Button
            variant="inversion"
            size="custom"
            className="py-3 font-bold w-full"
            onClick={handleGiftClick} // 선물하기 버튼의 onClick 이벤트를 props로 받음
          >
            선물하기
          </Button>
        </li>
        <li className="w-1/2">
          <Button
            variant="starbucks"
            size="custom"
            className="py-3 font-bold w-full"
            onClick={handlePurchaseClick} // 구매하기 버튼의 onClick 이벤트를 props로 받음
          >
            구매하기
          </Button>
        </li>
      </section>
    </ul>
  );
}
