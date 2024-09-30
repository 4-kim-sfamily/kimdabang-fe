"use client";

import { getItemCardInfo } from "@/actions/getItemCardInfo";
import { getCategoryName } from "@/actions/product/getCategoryName";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cart from "../icons/Cart";
import ItemHearts from "../icons/ItemHearts";
import MainSkeleton from "../ui/skeleton";

export default function CategoryBestItemCard({
  productCode,
  authStatus,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const [cardItem, setCardItem] = useState<any>(null);
  const [categoryName, setCategoryName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemData = await getItemCardInfo(productCode);
        setCardItem(itemData);
        const category = await getCategoryName(itemData.categoryId);
        setCategoryName(category);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item card data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [productCode]);

  if (loading) {
    // 로딩 중일 때 Skeleton을 CategoryBestItemCard 크기만큼 표시
    return <MainSkeleton />; // 한 개의 스켈레톤만 렌더링
  }

  if (!cardItem) {
    return <p>Failed to load item data.</p>; // 에러 처리
  }

  return (
    <section className="w-[100%] border-slate-950 flex flex-col justify-start">
      <Link href={`/product/${productCode}`}>
        <div className="relative w-full overflow-hidden aspect-square">
          <Image
            src={cardItem.productImageUrl}
            alt={cardItem.productName}
            width={500}
            height={500}
            priority
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex justify-between pt-1">
        <p className="text-[#777777] text-[12px] pt-1 ">{categoryName}</p>
        <div className="flex gap-2">
          <ItemHearts productCode={productCode} authStatus={authStatus} />
          <Cart color="black" />
        </div>
      </div>
      <p className="text-[13px] ">{cardItem.productName}</p>
      <p className="font-semibold ">
        {cardItem.productPrice.toLocaleString("ko-KR")}
        {"원"}
      </p>
    </section>
  );
}
