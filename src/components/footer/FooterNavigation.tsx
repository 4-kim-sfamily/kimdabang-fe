"use client";
import { useSession } from "@/context/SessionContext";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterNavigation() {
  // useSession은 최상위에서 호출
  const session = useSession();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (session) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [session]); // session 값이 변경될 때마다 실행

  return (
    <div className="bg-gray-300 text-gray-600 px-1 py-1 flex flex-wrap justify-around text-center">
      <Link href="/" className="px-2 py-1 hover:underline">
        홈
      </Link>
      <span className="hidden md:inline">|</span>
      {isLogin ? (
        <button onClick={() => signOut()} className="px-2 py-1 hover:underline">
          로그아웃
        </button>
      ) : (
        <Link href="/member/login" className="px-2 py-1 hover:underline">
          로그인
        </Link>
      )}
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
