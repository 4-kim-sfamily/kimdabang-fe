import EntireReview from "./EntireReview";
import ProductRate from "./ProductRate";

export default function ProductCustomerReview({
  productCode,
}: {
  productCode: string;
}) {
  return (
    <section className="px-4">
      <h2 className="text-lg font-extrabold p-3"> 고객리뷰</h2>
      <ProductRate productCode={productCode}></ProductRate>
      {/* <RateViewer rateData={2.3}></RateViewer> */}
      {/* <PhotoMediaReview productCode={productCode} /> */}
      <EntireReview productCode={productCode} />
    </section>
  );
}
