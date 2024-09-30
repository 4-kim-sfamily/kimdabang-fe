import StarHistoryContainer from "@/components/pages/mypage/starhistory/history/StarHistoryContainer";
import type { Metadata } from "next";

type SearchParams = {
  start: string;
  end: string;
};
export const metadata: Metadata = {
  title: "내 별점 기록",
  description: "별점 내역 페이지입니다.",
};
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div>
      <StarHistoryContainer
        startDate={searchParams.start}
        endDate={searchParams.end}
      />
    </div>
  );
}
