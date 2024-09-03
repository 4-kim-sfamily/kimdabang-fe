"use client";
import Link from "next/link";

import { DownwardArrow, StarbucksIcon } from "@/components/icons/Index";
import KakaoLogo from "@/components/icons/KakaoLogo";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginPage() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn('credentials', {
      id: formData.get('id') as string,
      password: formData.get('password') as string,
      redirect: false,
      callbackUrl: '/',
    });
  };
  return (
    <div className="font-NanumSquare justify-between">
      <header className="mt-5 ml-4 mb-20">
        <DownwardArrow degree={90}></DownwardArrow>
      </header>

      <div className="flex flex-col mx-5">
        <div className="mt-5 mb-5 w-16">
          <StarbucksIcon />
        </div>

        <p className="text-2xl font-extrabold mb-2">
          안녕하세요. <br />
          스타벅스입니다.
        </p>

        <span className="font-light mb-8">
          회원 서비스 이용을 위해 로그인 해주세요.
        </span>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="id"
              placeholder="아이디"
              className="w-full pt-2 pb-1 px-3 border-b border-gray-300 placeholder-black"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="w-full pt-2 pb-1 px-3 border-b border-gray-300 placeholder-black"
            />
          </div>

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

          <div className="LoginButtons flex flex-col items-center">
            <Button type="submit" variant="starbucks">
              로그인하기
            </Button>
            <Button variant="kakao">
              <KakaoLogo />
              <span>카카오로 로그인하기</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
