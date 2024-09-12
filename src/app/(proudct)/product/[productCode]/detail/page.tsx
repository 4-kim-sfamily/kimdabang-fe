function page({ params }: { params: { reviewId: string } }) {
  console.log(decodeURIComponent(params.reviewId));
  // fetch review data
  return (
    <section>
      <p>review page </p>
      {decodeURIComponent(params.reviewId)}
    </section>
  );
}

export default page;
