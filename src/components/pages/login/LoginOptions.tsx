import Link from "next/link";

export default function LoginOptions() {
  return (
    <div className="flex justify-center p-1 w-full text-sm text-gray-600 mb-12 space-x-2">
      <Link href="#" className="hover:underline">
        아이디 찾기
      </Link>
      <span>|</span>
      <Link href="#" className="hover:underline">
        비밀번호 찾기
      </Link>
      <span>|</span>
      <Link href="/members/join" className="hover:underline">
        회원가입
      </Link>
    </div>
  );
}
