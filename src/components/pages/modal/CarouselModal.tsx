"use client";
import { SeasonMediaType } from "@/types/main/CarouselDataType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CarouselModal({
  carouselData,
  id,
}: {
  carouselData: SeasonMediaType[];
  id: string;
}) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();
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
      {carouselData?.slice(0, 6).map((item: SeasonMediaType, index) => (
        <div
          key={item.id}
          className="relative w-full aspect-[13/10]"
          ref={(el) => {
            if (el) {
              imageRefs.current[index - 1] = el;
            }
          }}
        >
          <Image
            onClick={() => router.push(`/season/${item.seasonId}`)}
            src={item.mediaURL}
            alt="item"
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </section>
  );
}
