"use client";

import {
  getCategoryBestProduct,
  responseGetBestType,
} from "@/actions/main/getBestProduct";
import CategoryBestItemCard from "@/components/Items/CategoryBestItemCard";
import MainSkeleton from "@/components/ui/skeleton";
import { useButtonGroup } from "@/context/OptionContext";
import { useEffect, useRef, useState } from "react";

export default function CategoryBestItem({
  authStatus,
}: {
  authStatus: boolean;
}) {
  const { selectedButton } = useButtonGroup();
  const [items, setItems] = useState<responseGetBestType["data"]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nowPage, setNowPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreItems = async () => {
    if (!selectedButton || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const productData = await getCategoryBestProduct(
        selectedButton.toString(),
        nowPage,
      );

      setItems((prevItems) => [...prevItems, ...productData.data]);
      setHasMore(productData.nextPage);
      setNowPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 새로운 카테고리가 선택될 때 데이터를 초기화하고 첫 페이지부터 로드
    setItems([]);
    setNowPage(0);
    setHasMore(true);
    loadMoreItems();
  }, [selectedButton]);

  useEffect(() => {
    if (loading || !observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, hasMore]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
        {items.map((item) => (
          <CategoryBestItemCard
            key={item.productCode}
            productCode={item.productCode}
            authStatus={authStatus}
          />
        ))}
      </div>
      {/* 로딩 중이거나 데이터가 더 있을 때만 observer 대상 설정 */}
      {loading && (
        <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <MainSkeleton key={index} />
          ))}
        </div>
      )}
      <div ref={observerRef} />
    </div>
  );
}
