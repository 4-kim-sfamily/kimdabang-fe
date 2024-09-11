// import { getPhotoReview } from '@/actions/revewAction';
import ReviewModal from "./modal";

async function page({
  params,
  searchParams,
}: {
  params: { productName: string };
  searchParams: { reviewId: string };
}) {
  // const resData: reviewListDataType = (await getPhotoReview(
  //   params.productName
  // )) as reviewListDataType;
  console.log(searchParams);
  console.log("params값:", params);
  return (
    <ReviewModal>
      <div>{searchParams.reviewId}이거는 왜 안보이지?</div>
      {/* <PhotoReviewListContainer data = {resData}/> */}
    </ReviewModal>
  );
}

export default page;
