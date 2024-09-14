"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { shippingAddressType } from "@/types/ResponseType";
import { Label } from "./label";
export default function AddressRadioGroup({
  selectedId,
  addressDataList,
  onClickRadioButton,
}: {
  onClickRadioButton: (id: number) => void;
  selectedId?: number;
  addressDataList: shippingAddressType[];
}) {
  return (
    <div className="mt-[4px] p-4">
      <RadioGroup>
        {/* Todo : default 설정 */}
        {addressDataList.map((address: shippingAddressType) => (
          <div
            key={address.id}
            className="flex items-center space-x-3 py-2"
            onClick={() => onClickRadioButton(address.id)}
          >
            <RadioGroupItem
              value={address.id.toString()}
              id={address.id.toString()}
            />
            <Label htmlFor={address.id.toString()}>
              <ul className="flex flex-col gap-[2.5px]">
                <li className="flex gap-1 items-center">
                  <p
                    className={`text-sm ${selectedId === address.id ? "font-extrabold" : "font-normal"}`}
                  >
                    {address.addressName}
                  </p>
                  {address.isDefault && (
                    <div className="text-[8px] h-[13px] text-starbucks bg-[#a4dbc5] rounded-sm px-[3px] leading-[13px]">
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
