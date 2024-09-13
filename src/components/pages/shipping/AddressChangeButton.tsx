"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";

export default function AddressChangeButton({ id }: { id: number }) {
  const router = useRouter(); // useRouter 훅 사용
  const handleChangeButton = () => {
    router.push(`/cart/${id}`);
  };

  return (
    <div>
      <Button variant="starbucks" size="lg" onClick={handleChangeButton}>
        변경하기
      </Button>
    </div>
  );
}
