"use client";
import { useState } from "react";
import AddressUpdate from "./AddressUpdate";

export interface AddressData {
  id: number;
  address: string;
  isDefault: boolean;
  addressName: string;
}

export default function AddressSection({
  addressDataList,
}: {
  addressDataList: AddressData[];
}) {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const handleAddress = (address: number) => {
    setSelectedAddress(address);
  };
  return (
    <section className="mt-[56px] w-full p-3 text-sm bg-[#eeeeebcc] py-6">
      <ul className="flex justify-between mb-1">
        <li className="flex gap-1 items-center">
          <p className="font-extrabold">{`${addressDataList[0]?.addressName}`}</p>
          {addressDataList[selectedAddress]?.isDefault && (
            <div className="text-[8px] h-[13px] text-[#12BD84] bg-[#B8ECDA] rounded-sm px-[3px] leading-[13px]">
              기본
            </div>
          )}
        </li>
        <AddressUpdate
          selectedNumber={selectedAddress}
          addressDataList={addressDataList}
          handleAddress={handleAddress}
        />
      </ul>
      <p>{`${addressDataList[selectedAddress]?.address}`}</p>
    </section>
  );
}
