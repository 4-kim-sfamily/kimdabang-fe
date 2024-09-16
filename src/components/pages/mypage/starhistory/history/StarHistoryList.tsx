import { StarHistoryType } from "@/types/ResponseType";

export default function StarHistoryList({ data }: { data: StarHistoryType[] }) {
  // 날짜 포맷을 변환하는 함수 (YY-MM-DD 형식)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="my-5">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex gap-x-5 items-center my-5">
            <div className="px-4">{`☆ + ${item.starAmount}`}</div>
            <section>
              <p className="text-xl text-bold whitespace-nowrap">
                {`적립 - ${item.description}`}
              </p>
              <p className="text-sm text-gray-300">{`일자 ${formatDate(item.createdAt)}`}</p>
              <p className="text-sm text-gray-300">{`유효기간 ${formatDate(item.expirationDate)}`}</p>
            </section>
          </div>
          {index < data.length - 1 && <hr />} {/* 마지막 요소 전까지 hr 추가 */}
        </div>
      ))}
    </div>
  );
}
