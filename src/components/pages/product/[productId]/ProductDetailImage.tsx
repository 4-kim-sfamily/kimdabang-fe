export default function ProductDetailImage({
  productContent,
}: {
  productContent: string;
}) {
  return (
    <section className="flex flex-col">
      <div
        className="mx-auto custom-product-content"
        dangerouslySetInnerHTML={{ __html: productContent }}
      />
    </section>
  );
}
