import { cartItemOption } from "@/types/items/Cart";

export default async function CartItemOption({
  id,
  amount,
}: {
  id: number;
  amount: number;
}) {
  const res = await fetch(`http://localhost:4000/cartItemOption?id=${id}`, {
    cache: "no-cache",
  });
  const option: cartItemOption = await res.json();
  return (
    <div className="w-full my-1">
      <div className="bg-[#eeeeebcc] py-1 px-2">
        <h4>
          옵션:{option[0].optionValue}|{amount}개
        </h4>
        {option[0].restock && (
          <h5 className="text-red-600 text-[12px]">{`[품절임박] 잔여수량: ${option[0].restock}개`}</h5>
        )}
      </div>
      <button className="border-[0.7px] border-[#787d79] w-full text-[#787d79] mt-2 py-[2px]">
        주문수정
      </button>
    </div>
  );
}
