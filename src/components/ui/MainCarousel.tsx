"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDataType } from "@/types/main/CarouselDataType";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayCarousel } from "../icons/Index";
import Pause from "../icons/Pause";
export default function MainCarousel({
  carouselData,
}: {
  carouselData: CarouselDataType[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleAutoplay = () => {
    if (isPlaying) {
      autoplay.current.stop();
      setIsPlaying(false);
    } else {
      autoplay.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        className="w-[100vw] p-0 relative"
      >
        <CarouselContent className="w-full">
          {carouselData.map((item: CarouselDataType) => (
            <CarouselItem className="relative w-[100vw] aspect-[13/10]">
              <Image
                src={item.imgUrl}
                alt={item.description}
                fill
                style={{ objectFit: "cover" }}
                className="p-0 w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-[1px] absolute bottom-0 right-0 h-8 w-36 text-[13px]">
          <div
            className="flex items-center jutify-center bg-[rgba(0,0,0,0.45)] p-2 gap-[2px] flex-grow
        "
          >
            <button className="mx-1" onClick={toggleAutoplay}>
              {isPlaying ? <Pause /> : <PlayCarousel />}
            </button>

            <span className="text-white">{current}</span>
            <span className="text-rgba(255,255,255,0.5)">/</span>
            <span className="text-rgba(255,255,255,0.5)">{count}</span>
          </div>
          <button className="bg-[rgba(0,0,0,0.45)] p-1 text-white flex-grow">
            전체보기
          </button>
        </div>
      </Carousel>
    </div>
  );
}