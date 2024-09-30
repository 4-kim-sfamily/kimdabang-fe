type HamburgerProps = {
  color?: string; // color prop은 선택적이며, 문자열 타입으로 정의
};

export default function Hamburger({ color = "white" }: HamburgerProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.4 10H7.60004V11.2H24.4V10Z" fill={color} />
      <path d="M24.4 14.8H7.60004V16H24.4V14.8Z" fill={color} />
      <path d="M24.4 19.6H7.60004V20.8H24.4V19.6Z" fill={color} />
    </svg>
  );
}
