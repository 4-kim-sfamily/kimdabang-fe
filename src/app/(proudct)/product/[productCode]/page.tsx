import ProductContainer from "@/components/pages/product/[productId]/ProductContainer";

export default function page({ params }: { params: { productCode: string } }) {
  console.log("this is productCode", params.productCode);
  return (
    <main>
      <ProductContainer productCode={params.productCode} />
    </main>
  );
}
