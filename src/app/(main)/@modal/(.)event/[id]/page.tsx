"use client";
import CategoryClose from "@/components/icons/CategoryClose";
import { CarouselDataType } from "@/types/main/CarouselDataType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EventModal from "./modal";
export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [carouselData, setCarouselData] = useState<CarouselDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/carouselData", {
          cache: "no-store",
        });
        const data: CarouselDataType[] = await res.json();
        setCarouselData(data);
      } catch (error) {
        console.error("Failed to fetch carousel data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (carouselData.length > 0 && params.id) {
      const timer = setTimeout(() => {
        const index = +params.id - 2;
        if (index >= 0 && index < imageRefs.current.length) {
          imageRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100); // 짧은 지연 시간 추가

      return () => clearTimeout(timer);
    }
  }, [carouselData, params.id]);
  return (
    <EventModal>
      <div className="w-full">
        <header className="bg-white w-full h-12 z-50 fixed flex items-center">
          <p className="absolute left-[50%] translate-x-[-50%] ">전체보기</p>
          <button
            className=" rounded-full absolute right-5 z-20"
            onClick={() => router.back()}
          >
            <CategoryClose color="black" />
          </button>
        </header>
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
      </div>
    </EventModal>
  );
}
