"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PeriodModal from "./modal";

export default function Page() {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isModalOpen, setModalOpen] = useState(true); // 모달 상태 관리

  const handleSubmit = () => {
    if (startDate && endDate && new Date(startDate) <= new Date(endDate)) {
      // URL에 기간 값을 설정
      router.push(`?start=${startDate}&end=${endDate}`);
      setModalOpen(false); // 조회 후 모달 닫기
    } else {
      alert("시작 날짜가 종료 날짜보다 이후일 수 없습니다.");
    }
  };

  return (
    <>
      <PeriodModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="bg-white p-5 w-3/4 rounded-xl">
          <h3 className="text-xl font-bold mb-4">조회 기간 설정</h3>
          <div className="mb-4">
            <label className="block font-medium">시작 날짜</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">종료 날짜</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="inversion" onClick={() => setModalOpen(false)}>
              취소
            </Button>
            <Button variant="starbucks" onClick={handleSubmit}>
              조회
            </Button>
          </div>
        </div>
      </PeriodModal>
    </>
  );
}
