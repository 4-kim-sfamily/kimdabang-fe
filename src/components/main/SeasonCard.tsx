import Image from "next/image";
import { RunningSeason } from "../../types/main/RunningSeasonDataType";
export default function SeasonCard({ item }: { item: RunningSeason }) {
  return (
    <div className="flex flex-col justify-start w-[200px] pr-[10px] py-4 pb-5">
      <div className="relative w-[200px] h-32 ">
        <Image
          src={item.thumbsImgUrl}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-[10px] pr-2">
        <p className="text-sm text-[#222222] truncate">{item.name}</p>
        <p className="text-[13px] text-[#666666] truncate">
          {item.description}
        </p>
      </div>
    </div>
  );
}
