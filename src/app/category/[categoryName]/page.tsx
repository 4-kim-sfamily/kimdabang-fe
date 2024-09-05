import CategorySection from "@/components/pages/category/CategorySection";
import ButtonGroup from "@/components/ui/ButtonGroup";
import CategoryAccordion from "@/components/ui/CategoryAccordion";

export default function page({ params }: { params: { categoryName: string } }) {
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion categoryName={params.categoryName} />
      <ButtonGroup />
      <CategorySection />
    </>
  );
}
