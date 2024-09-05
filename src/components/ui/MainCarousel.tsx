import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function MainCarousel() {
  return (
    <Carousel className="w-[100vw]">
      <CarouselContent className="w-full">
        <CarouselItem>1</CarouselItem>
        <CarouselItem>.2</CarouselItem>
        <CarouselItem>.3.</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
