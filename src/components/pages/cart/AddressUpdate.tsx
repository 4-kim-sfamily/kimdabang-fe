"use client";
// import AddressRadioGroup from "@/components/ui/AddressRadioGroup";
import { useEffect, useState } from "react";

export default function AddressUpdate() {
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
      <div className="w-full h-full z-20 top-[0] overflow-y-scroll">
        <p className="text-2xl font-extrabold">배송지 선택</p>
        <div className="relative">
          <button className="absolute right-4 text-[#259670]">
            + 새 배송지 추가
          </button>
        </div>

        {/* <AddressRadioGroup
          addressDataList={addressDataList}
          handleAddress={handleAddress}
        /> */}
      </div>
    </div>
  );
}
