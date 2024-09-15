import { getStarHistory } from "@/actions/mypage/starhistory/getStarHistory";
import StarHistoryList from "./StarHistoryList";
import StarHistoryListHeader from "./StarHistoryListHeader";

// app/mypage/starhistory/page.tsx
export default async function StarHistoryContainer() {
  // 오늘 날짜와 1년 전 날짜 계산
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const startDate = oneYearAgo.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];
  const data = await getStarHistory(startDate, endDate);
  return (
    <div>
      <header>
        <h2 className="m-2 text-3xl font-bold">별 히스토리</h2>
        <section className="p-5">
          <div className="flex justify-between">
            <p>기간 내 적립한 에코 별</p>
            <p className="text-[#01a862]">3개</p>
          </div>
          <div className="flex justify-between">
            <p>기간 내 적립한 누적 별</p>
            <p className="text-yellow-600">30개</p>
          </div>
          <br />
          <p className="text-xs text-gray-400">
            ※ 거래 변경, 별 소멸 및 기타 사유로 인해 실제 별 개수와 다소 차이가
            있을 수 있습니다.
          </p>
        </section>
      </header>
      <hr />
      <StarHistoryListHeader />
      <hr />
      <StarHistoryList data={data} />
    </div>
  );
}
