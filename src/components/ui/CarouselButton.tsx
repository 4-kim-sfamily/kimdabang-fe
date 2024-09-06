"use client";
import { useRouter } from "next/navigation";
import BackwardButton from "../icons/BackwardButton";

export default function CarouselButton({ current }: { current: number }) {
  const router = useRouter();
  const navigateToImagesView = (currentIndex: number) => {
    router.push(`/images/view/${currentIndex}`);
  };

  return (
    <button
      onClick={() => navigateToImagesView(current)}
      className="bg-[rgba(0,0,0,0.45)] p-1 text-white flex-grow flex items-center justify-center"
    >
      전체보기
      <BackwardButton />
    </button>
  );
}
