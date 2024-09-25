"use client";
import { putFavorite } from "@/actions/favorite/putFavorite";
import { useEffect, useState } from "react";

export default function ItemHearts({
  productCode,
  authStatus = false,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const [isLiked, setIsLiked] = useState(false); // 로컬 상태로 관리
  useEffect(() => {
    if (authStatus) {
      const fetchData = async () => {
        const res = await fetch(`/api/favorite/${productCode}`);
        const data = await res.json();
        setIsLiked(data.favorite);
      };
      fetchData();
    }
  }, [authStatus]);

  const handleClick = async () => {
    if (!authStatus) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    try {
      // Optimistic UI 처리
      setIsLiked(!isLiked);
      await putFavorite(productCode);

      // 강제로 다시 데이터 가져오기
      const res = await fetch(`/api/favorite/${productCode}`);
      const data = await res.json();
      setIsLiked(data.favorite);
    } catch (error) {
      setIsLiked(isLiked); // 실패하면 상태 복구
      console.error("좋아요 요청 중 오류 발생:", error);
    }
  };

  return (
    <button onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={isLiked ? "red" : "none"} // 로컬 상태에 따라 하트 색상 변경
          stroke={isLiked ? "red" : "black"} // 하트 윤곽선 색상 변경
        />
      </svg>
    </button>
  );
}
