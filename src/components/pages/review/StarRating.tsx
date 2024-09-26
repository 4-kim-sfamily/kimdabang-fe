import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingType {
  onRatingChange: (rate: number) => void; // props의 타입 정의
}

export default function StarRating({ onRatingChange }: StarRatingType) {
  const [rating, setRating] = useState(0); // 선택한 별점

  const handleRating = (rate: number) => {
    setRating(rate);
    onRatingChange(rate); // 상태 변경 함수를 호출
  };

  return (
    <div className="flex space-x-2">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={starValue}
              type="button" // 수정된 부분
              onClick={() => handleRating(starValue)}
              className="text-2xl focus:outline-none"
            >
              {starValue <= rating ? (
                <StarFilledIcon className="text-yellow-500 w-[25px] h-[25px]" />
              ) : (
                <Star className="text-gray-400 w-[25px] h-[25px]" />
              )}
            </button>
          );
        })}
    </div>
  );
}
