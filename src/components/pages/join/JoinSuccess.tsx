"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default async function JoinSuccess() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/member/login");
  };
  return (
    <div>
      <p className="text-2xl font-extrabold mb-2">회원가입을 축하드립니다!</p>
      <Button onClick={handleSubmit} variant="starbucks">
        로그인하러가기
      </Button>
    </div>
  );
}
