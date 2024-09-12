"use client";
import { CategoryClose } from "@/components/icons/Index";
import AddressRadioGroup from "@/components/ui/AddressRadioGroup";
import { useEffect, useState } from "react";
import { AddressData } from "./AddressSection";

export default function AddressUpdate({
  selectedNumber,
  addressDataList,
  handleAddress,
}: {
  selectedNumber: number;
  addressDataList: AddressData[];
  handleAddress: (id: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChageButton = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="mt-[56px]">
      <button className="text-[#a88855]" onClick={handleChageButton}>
        배송지 변경
      </button>
      <dialog
        className="w-full h-full z-20 top-[0] overflow-y-scroll"
        open={isOpen}
      >
        <header className=" bg-[white] w-full z-10 h-[56px] flex items-center shadow-md">
          <p className=" ml-[50%] translate-x-[-50%] font-extrabold">
            배송지 변경
          </p>
          <button
            className="absolute right-3 top-[2%]"
            onClick={handleChageButton}
          >
            <CategoryClose color="#444444" />
          </button>
        </header>

        <p className="text-2xl font-extrabold pt-4 pl-4">배송지 선택</p>
        <div className="relative">
          <button className="absolute right-4 text-[#01a862] mb-2">
            + 새 배송지 추가
          </button>
        </div>

        <AddressRadioGroup
          addressDataList={addressDataList}
          handleAddress={handleAddress}
          selectedNumber={selectedNumber}
        />
      </dialog>
    </div>
  );
}
