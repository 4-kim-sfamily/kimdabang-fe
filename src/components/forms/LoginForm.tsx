import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await signIn("credentials", {
      loginId: formData.get("id") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        className="w-full pt-2 pb-1 px-3 border-b mb-2 border-gray-300 placeholder-black"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="w-full pt-2 pb-1 mb-2 px-3 border-b border-gray-300 placeholder-black"
      />
      <div className="LoginButtons flex flex-col items-center">
        <Button type="submit" variant="starbucks">
          로그인하기
        </Button>
      </div>
    </form>
  );
}
