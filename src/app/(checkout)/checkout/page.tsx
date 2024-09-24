import CheckoutContainer from "@/components/pages/checkout/CheckoutContainer";

export default function page({
  searchParams,
}: {
  searchParams: { type: string; productCode?: string; optionId?: string };
}) {
  return (
    <CheckoutContainer
      type={searchParams.type}
      productCode={searchParams.productCode}
      optionId={searchParams.optionId}
    />
  );
}
