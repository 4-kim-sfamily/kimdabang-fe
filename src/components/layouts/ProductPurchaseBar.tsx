import { Cart } from "../icons/Index";
import { Button } from "../ui/button";

export default function ProductPurchaseBar() {
  return (
    <nav className="bg-white  w-full fixed bottom-0">
      <ul className="flex justify-around my-2 items-center text-center">
        <li className="pl-2">
          <button type="button">
            <Cart size="32" color="gray" />
          </button>
        </li>
        <section className="flex w-[80%] gap-1 justify-between">
          <li className="w-1/2">
            <Button
              variant="inversion"
              size="custom"
              className="py-3 font-bold w-full"
            >
              선물하기
            </Button>
          </li>
          <li className="w-1/2">
            <Button
              variant="starbucks"
              size="custom"
              className="py-3 font-bold w-full"
            >
              구매하기
            </Button>
          </li>
        </section>
      </ul>
    </nav>
  );
}
