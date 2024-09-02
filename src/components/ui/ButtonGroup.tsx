"use client";
import { useState } from "react";
import { SelectButton } from "./SelectButton";

const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[80%] overflow-x-auto relative scrollbar-hide ">
        <ul className="flex space-x-2">
          {[
            "생일 축하해요",
            "기분전환 하세요",
            "같이 먹어요",
            "어쩌구 저쩌구",
            "홈카페로 즐겨요",
            "탐나는 텀블러",
          ].map((item, index) => (
            <li>
              <SelectButton
                key={index}
                isSelected={selectedButton === index}
                onClick={() => handleClick(index)}
                // 각 버튼의 최소 너비 설정
              >
                {item}
              </SelectButton>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default ButtonGroup;
