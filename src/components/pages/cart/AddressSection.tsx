"use client";
import Link from "next/link";

export interface AddressData {
  id: number;
  address: string;
  isDefault: boolean;
  addressName: string;
}

export default function AddressSection({
  addressDataList,
}: {
  addressDataList?: AddressData;
}) {
  return (
    <section className="mt-[56px] w-full p-3 text-sm bg-[#eeeeebcc] py-5">
      <ul className="flex justify-between mb-1">
        <li className="flex gap-1 items-center">
          <p className="font-extrabold">{`배송지이름`}</p>
          {addressDataList && (
            <div className="text-[8px] h-[13px] text-[#12BD84] bg-[#B8ECDA] rounded-sm px-[3px] leading-[13px]">
              기본
            </div>
          )}
        </li>
        <Link href={"/shipping"} className="text-[#a88855]">
          배송지 변경
        </Link>
      </ul>
      <p>{`부산시 해운대구 반여동 `}</p>
    </section>
  );
}
