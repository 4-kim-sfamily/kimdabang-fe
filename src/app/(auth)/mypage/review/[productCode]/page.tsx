import ReviewForm from "@/components/forms/ReviewForm";

export default function page({
  params,
}: {
  params: {
    productCode: string;
  };
}) {
  return (
    <main>
      <ReviewForm productCode={params.productCode} />
    </main>
  );
}
