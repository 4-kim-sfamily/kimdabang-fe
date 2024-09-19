import CheckoutContainer from "@/components/pages/checkoout/CheckoutContainer";

export default function page({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  console.log("searchParams", searchParams);

  return <CheckoutContainer type={searchParams.type as "cart" | "buyNow"} />;
}
