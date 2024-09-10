import EntireReview from "./EntireReview";
import PhotoMediaReview from "./PhotoMediaReview";
import ProductRate from "./ProductRate";

export default function ProductCustomerReview({
  productCode,
}: {
  productCode: string;
}) {
  return (
    <section>
      <h2 className="font-extrabold text-xl my-5 mx-3"> 고객리뷰</h2>
      <ProductRate productCode={productCode}></ProductRate>
      <PhotoMediaReview productCode={productCode} />
      <EntireReview productCode={productCode} />
    </section>
  );
}
