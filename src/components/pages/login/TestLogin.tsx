"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function TestLogin() {
  const [loginError, setLoginError] = useState<string | null>(null); // 에러 메시지 상태

  useEffect(() => {
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
  }, []);
  return <div>테스트 계정으로 로그인 중입니다...</div>;
}
