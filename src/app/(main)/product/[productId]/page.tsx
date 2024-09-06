import ProductContainer from "@/components/pages/product/[productId]/ProductContainer";
import ProductDetailImage from "@/components/pages/product/[productId]/ProductDetailImage";

export default function page({ params }: { params: { productId: string } }) {
  return (
    <main>
      <ProductContainer productId={parseInt(params.productId)} />
    </main>
  );
}
