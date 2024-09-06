import { MegaPhone } from "@/components/icons/Index";
import Image from "next/image";

export default function ProductAds() {
  return (
    <div className="flex flex-col justify-center">
      <Image
        className="mt-5 mx-auto w-full"
        src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_universe_type_banner07.png&w=750"
        width={750}
        height={300}
        alt={"광고"}
      ></Image>
      <div className="text-left border-2 w-full gap-2 items-center  flex  my-3 border-gray-600 rounded-[5px] mx-auto text-xs">
        <MegaPhone /> 100명이 리뷰한 아이템이에요.
      </div>
    </div>
  );
}
