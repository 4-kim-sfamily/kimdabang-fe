import CheckoutContainer from "@/components/pages/checkout/CheckoutContainer";

export default function page({
  searchParams,
}: {
  searchParams: {
    type: string;
    productCode?: string;
    optionId?: string;
    amount?: number;
    addressId?: number;
  };
}) {
  return (
    <CheckoutContainer
      type={searchParams.type}
      productCode={searchParams.productCode}
      optionId={searchParams.optionId}
      amount={searchParams.amount}
      addressId={searchParams.addressId}
    />
  );
}
