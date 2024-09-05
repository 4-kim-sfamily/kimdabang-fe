import Link from "next/link";

export default function FooterNavigation() {
  return (
    <div className="bg-gray-300 text-gray-600 px-1 py-1 flex flex-wrap justify-around text-center">
      <Link href="/" className="px-2 py-1 hover:underline">
        홈
      </Link>
      <span className="hidden md:inline">|</span>
      <Link href="/member/login" className="px-2 py-1 hover:underline">
        로그인
      </Link>
      <span className="hidden md:inline">|</span>
      <Link href="/member/join" className="px-2 py-1 hover:underline">
        회원가입
      </Link>
      <span className="hidden md:inline">|</span>
      <Link href="#" className="px-2 py-1 hover:underline">
        앱 다운로드
      </Link>
      <span className="hidden md:inline">|</span>
      <Link href="#" className="px-2 py-1 hover:underline">
        PC버전
      </Link>
    </div>
  );
}
