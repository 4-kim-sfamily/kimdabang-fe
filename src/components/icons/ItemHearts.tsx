"use client";
import { getIsFavorite } from "@/actions/favorite/getIsFavorite";
import { putFavorite } from "@/actions/favorite/putFavorite";
import { useEffect, useState } from "react";

export default function ItemHearts({
  productCode,
  authStatus = false,
}: {
  productCode: string;
  authStatus: boolean;
}) {
  const [isLogin, setIsLogin] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // 로컬 상태로 관리
  useEffect(() => {
    if (authStatus === true) {
      // 서버에서 좋아요 여부를 가져옴
      setIsLogin(true);
      const getData = async () => {
        const data = await getIsFavorite(productCode);
        setIsLiked(data);
      };
      getData();
    }
  }, [authStatus]);
  const handleClick = async () => {
    // Optimistic UI - 서버 요청 전에 상태를 변경
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    try {
      // 서버에 요청을 보냄
      putFavorite(productCode);
    } catch (error) {
      // 서버 요청이 실패하면 상태를 복구
      setIsLiked(isLiked);
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
