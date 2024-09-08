"use client";
import { CarouselDataType } from "@/types/main/CarouselDataType";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CarouselModal({
  carouselData,
  id,
}: {
  carouselData: CarouselDataType[];
  id: string;
}) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (carouselData.length > 0 && id) {
      const timer = setTimeout(() => {
        const index = +id - 2;
        if (index >= 0 && index < imageRefs.current.length) {
          imageRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100); // 짧은 지연 시간 추가

      return () => clearTimeout(timer);
    }
  }, [carouselData, id]);
  return (
    <section>
      {carouselData?.map((item: CarouselDataType) => (
        <div
          key={item.id}
          className="relative w-full aspect-[13/10] "
          ref={(el) => {
            if (el) {
              imageRefs.current[item.id - 1] = el;
            }
          }}
        >
          <Image
            src={item.imgUrl}
            alt="item"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </section>
  );
}
