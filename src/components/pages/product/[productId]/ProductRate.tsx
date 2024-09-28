interface ProductRateResponse {
  productCode: string;
  rating: string;
  reviewCount: string;
}

export default async function ProductRate({
  productCode,
}: {
  productCode: string;
}) {
  const response = await fetch(
    `${process.env.JSONSERVER_URL}/reviewStatics?productCode=${productCode}`,
    {
      cache: "force-cache",
    },
  );
  const ratingResponse: ProductRateResponse = await response.json();
  const rating = parseFloat(ratingResponse.rating);
  //   const rating = 2;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <section>
      <div className="flex text-2xl items-baseline mb-4 mx-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-green-700">
              ☆
            </span>
          ))}

        <div className="absolute flex">
          {Array(fullStars)
            .fill(0)
            .map((_, index) => (
              <span key={index} className="text-green-700">
                ★
              </span>
            ))}

          {halfStar && <span className="text-green-700">★</span>}
        </div>

        <p className="mx-2">{rating}</p>
        <p className="text-sm">({ratingResponse.reviewCount})</p>
      </div>
    </section>
  );
}
