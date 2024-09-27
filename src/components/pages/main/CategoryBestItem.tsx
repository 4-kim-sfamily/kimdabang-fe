"use client";

import {
  getCategoryBestProduct,
  responseGetBestType,
} from "@/actions/main/getBestProduct";
import CategoryBestItemCard from "@/components/Items/CategoryBestItemCard";
import MainSkeleton from "@/components/ui/skeleton";
import { useButtonGroup } from "@/context/OptionContext";
import { useEffect, useState } from "react";

export default function CategoryBestItem({
  authStatus,
}: {
  authStatus: boolean;
}) {
  const { selectedButton } = useButtonGroup();
  const [items, setItems] = useState<responseGetBestType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedButton) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const productData = await getCategoryBestProduct(
          selectedButton.toString(),
          0,
        );
        setItems(productData);
      } catch (error) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedButton]);

  if (loading) {
    // 로딩 중일 때 Skeleton을 CategoryBestItemCard 크기만큼 표시
    return (
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <MainSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {items && (
        <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
          {items.data.map((item) => (
            <CategoryBestItemCard
              key={item.productCode}
              productCode={item.productCode}
              authStatus={authStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}
