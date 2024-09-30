import ReviewSection from "@/components/pages/review/ReviewSection";

export default async function page({
  params,
}: {
  params: { productCode: string };
}) {
  return (
    <main>
      <ReviewSection productCode={params.productCode} />
    </main>
  );
}
