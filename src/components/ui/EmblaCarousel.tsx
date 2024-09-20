"use client";
import { noiticationType } from "@/types/ResponseType";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

type PropType = {
  slides: noiticationType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => {
            return (
              <div className="embla__slide" key={item.title}>
                <Image
                  src={item.mediaUrl}
                  alt={item.title}
                  layout="intrinsic"
                  width={250}
                  height={500}
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
