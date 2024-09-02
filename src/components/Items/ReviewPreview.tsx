import Star from "../icons/Star";

export default function ReviewPreview({
  rate,
  reviewCnt,
}: {
  rate: number;
  reviewCnt: number;
}) {
  return (
    <div className="flex items-center text-[#777777] text-[12px]">
      <Star />
      {`${rate} | ${reviewCnt}건`}
    </div>
  );
}
