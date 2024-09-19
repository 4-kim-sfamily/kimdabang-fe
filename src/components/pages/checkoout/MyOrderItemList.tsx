import Image from "next/image"; // or 'react-bootstrap/Image'
import ProductOptionItem from "./ProductOptionItem";

export default async function MyOrderItemList({
  type,
  itemNo,
}: {
  type: string;
  itemNo?: string;
}) {
  // const data = await getProductOptionInfo(itemNo);
  // console.log(data);
  return (
    <div>
      {/* 여기에는 내가 주문할 Item 정보들이 들어갈 예정입니다. */}
      {/* {type === "buyNow" && itemNo} */}
      <div className="flex gap-2 items-center">
        <Image
          src="https://picsum.photos/200/200"
          alt={"이미지"}
          width={50}
          height={50}
          className="rounded-xl"
        ></Image>
        <p>[각인] SS 스탠리 그린 아이슬란드 텀블러</p>
      </div>
      <ProductOptionItem />
    </div>
  );
}
