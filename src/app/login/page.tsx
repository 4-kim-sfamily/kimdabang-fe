import Link from "next/link";

import { DownwardArrow, StarbucksIcon } from "@/components/icons/Index";
import KakaoLogo from "@/components/icons/KakaoLogo";

export default function LoginPage() {
  return (
    <div className="font-NanumSquare  flex flex-col justify-between">
      <header className="mt-5 ml-4 mb-20">
        {/* 여기에 에로우 방향 추가 후 넣어야할듯 */}
        <DownwardArrow></DownwardArrow>
      </header>

      <div className="flex flex-col mx-5">
        <div className="mb-5 w-16">
          <StarbucksIcon />
        </div>

        <p className="text-2xl font-extrabold mb-2">
          안녕하세요. <br />
          스타벅스입니다.
        </p>

        <span className="font-light mb-8">
          회원 서비스 이용을 위해 로그인 해주세요.
        </span>

        <form className="w-full">
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

        <div className="flex justify-center p-1 w-full text-sm text-gray-600 mb-48 space-x-2">
          <Link href="#" className="hover:underline">
            아이디 찾기
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            비밀번호 찾기
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            회원가입
          </Link>
        </div>
      </div>

      <button className=" mb-2 mx-6 bg-[#01a862] text-white py-3 rounded-full font-bold">
        로그인하기
      </button>
      <Link
        href="https://kauth.kakao.com/oauth/authorize"
        className="mb-2 mx-6 bg-[#FEE500] text-black py-3 rounded-full font-bold flex items-center">
        <div className="ml-auto mr-5">
          <KakaoLogo />
        </div>
        <span className="mr-auto">카카오로 로그인하기</span>
      </Link>
    </div>
  );
}
