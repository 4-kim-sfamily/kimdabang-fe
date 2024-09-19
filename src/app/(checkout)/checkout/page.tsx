import CheckoutContainer from "@/components/pages/checkoout/CheckoutContainer";

export default function page({
  searchParams,
}: {
  searchParams: { type: string; itemNo?: string };
}) {
  return (
    <CheckoutContainer type={searchParams.type} itemNo={searchParams.itemNo} />
  );
}
