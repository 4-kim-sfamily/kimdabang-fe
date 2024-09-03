"use client";
import { useState } from "react";
import DownwardArrow from "../icons/DownwardArrow";
import { SelectButton } from "./SelectButton";
import { Button } from "./button";

const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className="w-full flex flex-row items-center gap-1">
      <div className="w-[100%] overflow-x-auto relative scrollbar-hide">
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
                className="border-[#E5E5E5]"
              >
                {item}
              </SelectButton>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant="optionArrow"
        className="p-0 m-0 w-9 h-9 rounded-none drop-shadow-gradientLeft lg:hidden"
      >
        <DownwardArrow degree={0} />
      </Button>
    </div>
  );
};

export default ButtonGroup;
