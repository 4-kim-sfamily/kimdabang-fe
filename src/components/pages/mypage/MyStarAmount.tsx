import { Button } from "@/components/ui/button";

interface StarResponse {
  starAmount: number;
  greenStarAmount: number;
}

export default async function MyStarAmount({ starType }: { starType: string }) {
  let starAmount: number = 0;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/get-userstaramount`,
    );

    if (response.ok) {
      const data: StarResponse = await response.json();
      if (starType === "regular") {
        starAmount = data.starAmount;
      } else {
        starAmount = data.greenStarAmount;
      }
    }
  } catch (error) {
    console.error("쿠폰 데이터 Fetching에러", error);
  }

  return (
    <article className="mypage-article">
      <p className="font-extrabold">일반 별</p>
      <p>{starAmount}개</p>
      <Button variant="starbucks" size="s">
        내역보기
      </Button>
    </article>
  );
}
