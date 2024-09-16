"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PeriodModal() {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    if (startDate && endDate) {
      // URL에 기간 값을 설정
      router.push(`/mypage/starhistory?start=${startDate}&end=${endDate}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
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
          <Button variant="inversion" onClick={() => router.back()}>
            취소
          </Button>
          <Button variant="starbucks" onClick={handleSubmit}>
            조회
          </Button>
        </div>
      </div>
    </div>
  );
}
