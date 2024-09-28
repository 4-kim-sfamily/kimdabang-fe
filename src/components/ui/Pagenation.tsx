"use client";
import React, { useEffect } from "react";

export default function Pagenation({
  lastPage,
  currentPage,
  setCurrentPage,
}: {
  lastPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  console.log(lastPage, currentPage);
  const [pageList, setPageList] = React.useState(1); // 초기값을 1로 설정

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;

    if (value === "first") {
      setCurrentPage(1); // 첫 페이지는 1
      setPageList(1);
    } else if (value === "last") {
      setCurrentPage(lastPage);
      setPageList(Math.max(1, lastPage - 4)); // 마지막 페이지 리스트 계산
    } else if (value === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        if (currentPage - 1 < pageList) {
          setPageList(Math.max(1, pageList - 1));
        }
      }
    } else if (value === "next") {
      if (currentPage < lastPage) {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > pageList + 4) {
          setPageList(pageList + 1);
        }
      }
    } else {
      setCurrentPage(Number(value));
    }
  };

  useEffect(() => {
    setCurrentPage(1); // 첫 페이지는 1로 설정
    setPageList(1);
  }, [lastPage, setCurrentPage]);

  if (!lastPage) return null;

  return (
    <div className="flex justify-center w-full my-7">
      <button
        value="first"
        onClick={handleClick}
        disabled={currentPage === 1} // 첫 페이지는 1
        className={`w-7 h-7 font-semibold rounded-full mx-1 ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-black bg-transparent"
        }`}
      >
        &lt;&lt;
      </button>
      <button
        value="prev"
        onClick={handleClick}
        disabled={currentPage === 1} // 첫 페이지는 1
        className={`w-7 h-7 font-semibold rounded-full mx-1 ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-black bg-transparent"
        }`}
      >
        &lt;
      </button>
      {Array.from(
        { length: Math.min(5, lastPage - pageList + 1) }, // 5개씩 페이지 리스트 출력
        (_, index) => (
          <button
            key={index}
            value={pageList + index}
            onClick={handleClick}
            disabled={pageList + index > lastPage}
            className={`w-7 h-7 font-semibold rounded-full mx-1 ${
              pageList + index === currentPage
                ? "text-white bg-starbucks"
                : "text-black bg-transparent"
            }`}
          >
            {pageList + index}
          </button>
        ),
      )}
      <button
        value="next"
        onClick={handleClick}
        disabled={currentPage === lastPage}
        className={`w-7 h-7 font-semibold rounded-full mx-1 ${
          currentPage === lastPage
            ? "text-gray-400 cursor-not-allowed"
            : "text-black bg-transparent"
        }`}
      >
        &gt;
      </button>
      <button
        value="last"
        onClick={handleClick}
        disabled={currentPage === lastPage}
        className={`w-7 h-7 font-semibold rounded-full mx-1 ${
          currentPage === lastPage
            ? "text-gray-400 cursor-not-allowed"
            : "text-black bg-transparent"
        }`}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
