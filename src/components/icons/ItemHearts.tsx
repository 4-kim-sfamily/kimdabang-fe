"use client";

export default async function ItemHearts({
  productCode,
  putFavorite,
  getIsFavorite,
}) {
  let isliked = false;
  const handleClick = () => {
    putFavorite(productCode);
  };
  // 좋아요 API 구현 완료 후, 주석 해제
  // getIsFavorite(productCode).then((data) => {
  //   isliked = data.favorite;
  // });
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
          fill={isliked ? "red" : "none"} // isliked 값에 따라 색칠된 하트 또는 빈 하트
          stroke={isliked ? "red" : "black"} // 빈 하트일 때 윤곽선 표시
        />
      </svg>
    </button>
  );
}
