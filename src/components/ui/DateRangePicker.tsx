"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DateRangePicker({ closePopover }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (startDate && endDate && new Date(startDate) <= new Date(endDate)) {
      router.push(`?start=${startDate}&end=${endDate}`);
      closePopover();
    } else {
      alert("시작 날짜가 종료 날짜보다 이후일 수 없습니다.");
    }
  };

  return (
    <>
      <dialog open={true} className="bg-white p-5 w-3/4 rounded-xl">
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
        <div className="flex justify-end space-x-4 w-full">
          <Button variant="starbucks" onClick={handleSubmit} className="w-full">
            조회
          </Button>
        </div>
      </dialog>
    </>
  );
}
