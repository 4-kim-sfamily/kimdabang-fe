import Image from "next/image";
import Link from "next/link";
import img from "../../../components/icons/testImg.svg";
export default function PurchaseItem() {
  return (
    <span className="flex flex-col gap-3 w-full">
      <div className=" border-[1.5px] rounded-xl itmes-center w-full  p-2 flex flex-col items-center">
        <div className="flex w-full mb-1">
          <div className="w-24 h-24 object-cover overflow-hidden p-2 border-spacing-5 rounded">
            <Image
              src={img}
              alt="상품이미지"
              width={300}
              height={300}
              priority
            />
          </div>
          <ul className="flex flex-col justify-center">
            <li className="text-sm">{`[스타벅스] 5만원 기프티콘`}</li>
            <li className="text-[0.7em]">1개</li>
            <li className="font-extrabold">50,000원</li>
          </ul>
        </div>
        <Link
          href={`/mypage/reveiw/1`}
          className=" text-[0.8em] border-[1px] border-starbucks text-starbucks w-full py-1 text-center rounded font-extrabold"
        >
          리뷰 작성하기
        </Link>
      </div>
    </span>
  );
}
