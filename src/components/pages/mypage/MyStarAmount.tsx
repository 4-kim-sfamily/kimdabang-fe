import { Button } from "@/components/ui/button";

export default function MyStarAmount({
  starAmount,
  starType,
}: {
  starAmount: number;
  starType: string;
}) {
  return (
    <article className="mypage-article">
      <p className="font-extrabold">
        {starType === "regular" ? "일반 별" : "에코 별"}
      </p>
      <p>{starAmount}개</p>
      <Button variant="starbucks" size="s">
        내역보기
      </Button>
    </article>
  );
}
