type HamburgerProps = {
  color?: string; // color prop은 선택적이며, 문자열 타입으로 정의
};

export default function Hamburger({ color = "white" }: HamburgerProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4001 6H3.6001V7.2H20.4001V6Z" fill={color} />
      <path d="M20.4001 10.8H3.6001V12H20.4001V10.8Z" fill={color} />
      <path d="M20.4001 15.6001H3.6001V16.8001H20.4001V15.6001Z" fill={color} />
    </svg>
  );
}
