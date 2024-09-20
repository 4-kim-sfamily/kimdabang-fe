"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterNavigation() {
  const [islogin, setIsLogin] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    console.log("FOOTERNAVIGATION에서 보는데 status", status);
    const checkSession = async () => {
      if (status === "authenticated") {
        console.log("FOOTERNAVIGATION에서 보는데 로그인중임");
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    checkSession();
  }, [status]);

  return (
    <div className="bg-gray-300 text-gray-600 px-1 py-1 flex flex-wrap justify-around text-center">
      <Link href="/" className="px-2 py-1 hover:underline">
        홈
      </Link>
      <span className="hidden md:inline">|</span>
      {islogin ? (
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
