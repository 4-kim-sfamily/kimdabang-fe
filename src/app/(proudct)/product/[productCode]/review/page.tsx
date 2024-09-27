import ReviewSection from "@/components/pages/review/ReviewSection";

export default async function page({
  params,
}: {
  params: { productCode: string };
}) {
  return (
    <main>
      {params.productCode && <ReviewSection productCode={params.productCode} />}
    </main>
  );
}
