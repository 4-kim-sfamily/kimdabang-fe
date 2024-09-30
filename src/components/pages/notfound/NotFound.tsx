"use client";
import { StarbucksIcon } from "@/components/icons/Index";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-center px-4 w-full">
      <div className="w-40 h-40 aspect-square mb-10">
        <StarbucksIcon />
      </div>
      <h1 className="text-xl font-bold mb-4 break-words text-starbucks">
        서비스 이용에 불편을 드려 죄송합니다.
      </h1>
      <h2 className="text-lg mb-2 text-[#444] break-words whitespace-normal">
        요청한 웹페이지의 주소를 찾을 수 없습니다.
        <br />
        <strong>입력하신 주소를 확인해 주세요.</strong>
      </h2>
      <Link href="/" className="w-full">
        <Button variant="starbucks" size="lg" className="mt-10 mx-auto py-4">
          메인 페이지로 이동
        </Button>
      </Link>
    </main>
  );
}
