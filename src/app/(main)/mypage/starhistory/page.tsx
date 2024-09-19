import StarHistoryContainer from "@/components/pages/mypage/starhistory/history/StarHistoryContainer";

type SearchParams = {
  start: string;
  end: string;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  console.log(searchParams);
  return (
    <div>
      <StarHistoryContainer
        startDate={searchParams.start}
        endDate={searchParams.end}
      />
    </div>
  );
}
