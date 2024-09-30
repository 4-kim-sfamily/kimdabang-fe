"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function LoginForm({ autoLogin }: { autoLogin: boolean }) {
  const [loginError, setLoginError] = useState<string | null>(null); // 에러 메시지 상태

  useEffect(() => {
    if (autoLogin) {
      const autoLoginData = {
        loginId: "test1", // 테스트용 아이디
        password: "12345678", // 테스트용 비밀번호
      };

      signIn("credentials", {
        loginId: autoLoginData.loginId,
        password: autoLoginData.password,
        callbackUrl: "/",
        redirect: true, // 성공 시 리다이렉트
      }).then((result) => {
        if (result?.error) {
          setLoginError(
            "자동 로그인 실패: 아이디 혹은 비밀번호가 일치하지 않습니다.",
          );
        } else {
          setLoginError(null); // 에러 없으면 초기화
        }
      });
    }
  }, [autoLogin]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      loginId: formData.get("id") as string,
      password: formData.get("password") as string,
      callbackUrl: "/",
      redirect: true, // 에러 핸들링을 위해 redirect를 false로 설정
    });

    if (result?.error) {
      setLoginError("아이디 혹은 비밀번호가 일치하지 않습니다."); // 에러 메시지 설정
    } else {
      setLoginError(null); // 에러 없으면 초기화
      window.location.href = "/"; // 성공 시 리다이렉트
    }
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
      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

      <Button type="submit" variant="starbucks" className="w-full mt-6">
        로그인하기
      </Button>
    </form>
  );
}
