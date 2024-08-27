import React from "react";

type ArrowWithTailProps = {
  color?: string; // color prop은 선택적이며, 문자열 타입으로 정의
  rotate_degree?: string;
};

// 꼬리가 있는 화살표이며 기본 값은 위쪽을 바라보는 화살표

export default function ArrowWithTail({
  color = "black",
  rotate_degree = "0",
}: ArrowWithTailProps) {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill={color}
      style={{ transform: `rotate(${rotate_degree}deg)` }}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.2 6.40002H1.9L7.59999 0.8L6.79999 0L0 6.90002L6.79999 13.8L7.59999 13L1.9 7.40003H16.2V6.40002Z" />
    </svg>
  );
}
