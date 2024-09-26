import { getProductInfo } from "@/actions/getProductInfo";
import { getProductMedia } from "@/actions/getProductMedia";
import { getProductOption } from "@/actions/getProductOption";
import {
  optionType,
  ProductMediaType,
  ProductType,
  PurchaseItemType,
} from "@/types/ResponseType";
import Image from "next/image";
import Link from "next/link";

export default async function PurchaseItem({
  item,
}: {
  item: PurchaseItemType;
}) {
  const [img, info, option] = await Promise.all([
    getProductMedia(item.productCode) as Promise<ProductMediaType>,
    getProductInfo(item.productCode) as Promise<ProductType>,
    getProductOption(item.productCode) as Promise<optionType[]>,
  ]);
  console.log(item.productCode);
  return (
    <div className="flex flex-col gap-3 w-full mb-3">
      <span className="flex flex-col gap-3 w-full">
        <div className="border-[1.5px] rounded-xl items-center w-full p-2 flex flex-col">
          <div className="flex w-full mb-1">
            <div className="w-24 h-24 object-cover overflow-hidden p-2 border-spacing-5 rounded">
              <Image
                src={img[0].mediaURL}
                alt="상품이미지"
                width={300}
                height={300}
                priority
              />
            </div>
            <ul className="flex flex-col justify-center">
              <li className="text-sm">
                <Link
                  href={`/product/${item.productCode}`}
                >{` ${info.productName}`}</Link>
              </li>
              <li className="text-[0.7em]">{`${item.quantity}개`}</li>
              <li className="font-extrabold">{`${item.price}원`}</li>
            </ul>
          </div>
          <Link
            href={`/mypage/review/${item.productCode}?options=${item.options}`} // 리뷰 작성 링크 수정
            className="text-[0.8em] border-[1px] border-starbucks text-starbucks w-full py-1 text-center rounded font-extrabold"
          >
            리뷰 작성하기
          </Link>
        </div>
      </span>
    </div>
  );
}
