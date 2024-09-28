import { SeasonMediaType } from "@/types/main/CarouselDataType";
import Image from "next/image";
export default function SeasonCard({ item }: { item: SeasonMediaType }) {
  return (
    <div className="flex flex-col justify-start w-[200px] pr-[10px] py-4 pb-5">
      <div className="relative w-[200px] h-32 ">
        <Image
          src={item.mediaURL}
          alt={item.imageName}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-[10px] pr-2">
        <p className="text-sm text-[#222222] truncate">{item.imageName}</p>
        {/* <p className="text-[13px] text-[#666666] truncate">
          {item.description}
        </p> */}
      </div>
    </div>
  );
}
