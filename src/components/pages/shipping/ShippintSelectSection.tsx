"use client";
import AddressRadioGroup from "@/components/ui/AddressRadioGroup";
import { shippingAddressType } from "@/types/ResponseType";
import { Suspense, useState } from "react";
import AddressChangeButton from "./AddressChangeButton";

export default function ShippingSelectSection({
  data,
}: {
  data: shippingAddressType[];
}) {
  const [selectedId, setSelectedId] = useState(1);
  const onClickRadioButton = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div className="mb-14">
      <Suspense fallback={<div>Loading...</div>}>
        <AddressRadioGroup
          addressDataList={data}
          selectedId={selectedId}
          onClickRadioButton={onClickRadioButton}
        />
      </Suspense>
      <AddressChangeButton id={selectedId} />
    </div>
  );
}
