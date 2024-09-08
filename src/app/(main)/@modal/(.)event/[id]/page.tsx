import ModalHeader from "@/components/layouts/ModalHeader";
import CarouselModal from "@/components/pages/modal/CarouselModal";
import EventModal from "./modal";
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:4000/carouselData", {
    cache: "no-store",
  });
  const carouselData = await res.json();

  return (
    <EventModal>
      <main className="w-full">
        <ModalHeader />
        <CarouselModal carouselData={carouselData} id={params.id} />
      </main>
    </EventModal>
  );
}
