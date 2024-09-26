"use client";

import StarbucksIcon from "@/components/icons/StarbucksIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorBoundary() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <div className="w-40 h-40 aspect-square mb-10">
        <StarbucksIcon />
      </div>
      <h1 className="text-4xl font-bold mb-4 break-words">
        서비스 <span className="text-starbucks">이용에 불편을</span> 드려
        죄송합니다.
      </h1>

      <p className="text-lg mb-2 text-[#444] break-words whitespace-normal">
        요청한 웹페이지의 이름이 바뀌었거나 현재{" "}
        <strong>사용할 수 없거나 삭제</strong>되었습니다.
        <br />
        입력하신 주소가 정확한지{" "}
        <strong>다시 한번 확인해보시기 바랍니다.</strong>
      </p>
      <Link href="/">
        <Button variant="starbucks" size="free" className="mt-10">
          메인 페이지로 이동
        </Button>
      </Link>
    </div>
  );
}
