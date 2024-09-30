import { getSeasonMedia } from "@/actions/main/season";
import ModalHeader from "@/components/layouts/ModalHeader";
import CarouselModal from "@/components/pages/modal/CarouselModal";
import { SeasonMediaType } from "@/types/main/CarouselDataType";
import { Metadata } from "next/types";
import EventModal from "./modal";

export const metadata: Metadata = {
  title: "Starbucks Season",
  description: "스타벅스 시즌 페이지입니다.",
};

export default async function Page({ params }: { params: { id: string } }) {
  const carouselData: SeasonMediaType[] = await getSeasonMedia();
  return (
    <EventModal>
      <main className="w-full">
        <ModalHeader />
        <CarouselModal carouselData={carouselData} id={params.id} />
      </main>
    </EventModal>
  );
}
