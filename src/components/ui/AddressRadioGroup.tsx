"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AddressData } from "../pages/cart/AddressSection";
import { Label } from "./label";
export default function AddressRadioGroup({
  handleAddress,
  selectedNumber,
  addressDataList,
}: {
  handleAddress: (id: number) => void;
  selectedNumber: number;
  addressDataList: AddressData[];
}) {
  return (
    <div className="mt-[4px] p-4">
      <RadioGroup defaultValue={selectedNumber.toString()}>
        {addressDataList.map((address: AddressData, index) => (
          <div key={index} className="flex items-center space-x-3 py-2">
            <RadioGroupItem value={index.toString()} id={index.toString()} />
            <Label
              onClick={() => handleAddress(index)}
              htmlFor={index.toString()}
            >
              <ul className="flex flex-col gap-[2.5px]">
                <li className="flex gap-1 items-center">
                  <p
                    className={`text-sm ${selectedNumber === index ? "font-extrabold" : "font-normal"}`}
                  >
                    {address.addressName}
                  </p>
                  {address.isDefault && (
                    <div className="text-[8px] h-[13px] text-[#01a862] bg-[#a4dbc5] rounded-sm px-[3px] leading-[13px]">
                      기본
                    </div>
                  )}
                </li>
                <li>{address.address}</li>
                <li>010-1234-5678</li>
              </ul>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
