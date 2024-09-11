"use client";
import { XCircle } from "@/components/icons/Index";

export default function DeleteCartItem() {
  const handleDeleteButton = () => {
    location.reload();
    //아이템 삭제
  };
  return (
    <button
      onClick={handleDeleteButton}
      className="flex flex-col justify-start"
    >
      <XCircle />
    </button>
  );
}
