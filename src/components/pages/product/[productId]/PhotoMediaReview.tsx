interface PhotoMediaReviewType {
  productCode: "string";
  imgUrl: "string";
}

export default async function PhotoMediaReview({
  productCode,
}: {
  productCode: string;
}) {
  const response = await fetch(
    `${process.env.JSONSERVER_URL}/imgUrl?productCode=${productCode}`,
    {
      cache: "force-cache",
    },
  );
  const imgList: PhotoMediaReviewType[] = response.json();
  return (
    <div>
      <h3>포토&동영상 리뷰</h3>
    </div>
  );
}
