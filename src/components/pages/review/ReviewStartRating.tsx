import React from "react";

interface StarRatingProps {
  rating: number; // 0부터 5까지의 소수점 포함
}

const ReviewStarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    // 소수점 처리: 0.5별은 별 아이콘의 다른 스타일로 나타냄
    const isHalfStar = rating >= starValue - 0.5 && rating < starValue;
    const isFullStar = rating >= starValue;

    return (
      <span key={index} className="text-yellow-500">
        {isFullStar ? (
          <span>★</span> // 꽉 찬 별
        ) : isHalfStar ? (
          <span>☆</span> // 반별
        ) : (
          <span>☆</span> // 빈 별
        )}
      </span>
    );
  });

  return <div className="flex">{stars}</div>;
};

export default ReviewStarRating;
