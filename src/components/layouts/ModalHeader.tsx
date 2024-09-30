"use client";
import { useRouter } from "next/navigation";
import { CategoryClose } from "../icons/Index";

export default function ModalHeader() {
  const router = useRouter();
  return (
    <header className="bg-white w-full h-12 z-50 fixed flex items-center">
      <p className="absolute left-[50%] translate-x-[-50%] ">전체보기</p>
      <button
        className=" rounded-full absolute right-5 z-20"
        onClick={() => router.back()}
      >
        <CategoryClose color="black" />
      </button>
    </header>
  );
}
