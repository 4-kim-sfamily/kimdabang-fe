import { signIn } from "next-auth/react";
// eslint-disable-next-line import/order
import Link from "next/link";

import { DownwardArrow, StarbucksIcon } from "@/components/icons/Index";
import KakaoLogo from "@/components/icons/KakaoLogo";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("id"));
    console.log(formData.get("password"));
    signIn("credentials", {
      id: formData.get("id") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="font-NanumSquare   justify-between">
      <header className="mt-5 ml-4 mb-20">
        {/* 여기에 에로우 방향 추가 후 넣어야할듯 */}
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

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-2">
            <input
              type="text"
              id="loginId"
              placeholder="아이디"
              className="w-full pt-2 pb-1 px-3 border-b border-gray-300  placeholder-black "
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              className="w-full pt-2 pb-1 px-3 border-b border-gray-300  placeholder-black"
            />
          </div>
        </form>

        <div className="flex justify-center p-1 w-full text-sm text-gray-600 mb-12 space-x-2">
          <Link href="#" className="hover:underline">
            아이디 찾기
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            비밀번호 찾기
          </Link>
          <span>|</span>
          <Link href="/sign-in" className="hover:underline">
            회원가입
          </Link>
        </div>
      </div>

      <div className="LoginButtons flex flex-col items-center">
        <Button variant="starbucks">로그인하기</Button>
        <Button variant="kakao">
          <KakaoLogo></KakaoLogo>
          <span>카카오로 로그인하기</span>
        </Button>
      </div>
    </div>
  );
}
