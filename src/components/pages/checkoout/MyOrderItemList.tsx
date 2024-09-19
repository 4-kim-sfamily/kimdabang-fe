import ProductOptionItem from "./ProductOptionItem";

export default function MyOrderItemList({
  type,
  itemNo,
}: {
  type: string;
  itemNo?: string;
}) {
  return (
    <div>
      {/* 여기에는 내가 주문할 Item 정보들이 들어갈 예정입니다. */}
      {type === "buyNow" && itemNo}
      <ProductOptionItem />
    </div>
  );
}
