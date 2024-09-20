"use client";
import { join } from "@/actions/join/join";
import { verifyId } from "@/actions/join/verifyId";
import { useAgreement } from "@/app/context/AgreementContext"; // useAgreement 훅을 사용하여 context에 접근
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./joinFromIndex"; // 필요에 따라 경로 조정

// 폼 스키마 정의
const FormSchema = z
  .object({
    id: z.string().min(4, "아이디는 최소 4자 이상이어야 합니다."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    nickname: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"], // 에러 메시지를 패스워드 확인 필드에 적용
  });

export default function JoinAdditionalForm({ onNext }) {
  const [error, setError] = useState<string | null>(null);
  const [isIdVerified, setIsIdVerified] = useState(false); // 아이디 검증 여부
  const [idError, setIdError] = useState<string | null>(null); // 아이디 에러 메시지
  const { userData, setUserData, agreementData, providerInfo } = useAgreement(); // AgreementContext의 데이터를 가져오기
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // 아이디 검증 함수
  const handleVerifyId = () => {
    const id = form.getValues("id"); // 폼의 ID 값만 가져옴
    if (!id) {
      setIdError("아이디를 입력해주세요.");
      return;
    }
    verifyId(id)
      .then((result) => {
        if (result) {
          setIsIdVerified(true); // 아이디 검증 성공
          setIdError(null); // 에러 메시지 초기화
        } else {
          setIsIdVerified(false);
          setIdError("이미 사용중인 아이디입니다."); // 에러 메시지 설정
        }
      })
      .catch((error) => {
        console.error("아이디 검증 중 오류 발생:", error);
        setIdError("아이디 검증 중 오류가 발생했습니다.");
      });
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      // Context에 userData 업데이트
      setUserData((prev) => ({
        ...prev,
        id: data.id,
        password: data.password,
        nickname: data.nickname,
      }));

      // context 업데이트 후 join 호출
      await new Promise((resolve) => setTimeout(resolve, 0)); // 업데이트가 반영되도록 약간의 지연

      // 업데이트된 userData 사용
      join(
        {
          ...userData,
          id: data.id,
          password: data.password,
          nickname: data.nickname,
        },
        agreementData,
        providerInfo,
      );

      onNext(); // 다음 단계로 진행
    } catch (error) {
      setError("제출 중 오류가 발생했습니다.");
      console.error("가입 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* ID 필드 */}
          <section className="flex gap-2">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="flex flex-col w-2/3">
                  <FormLabel htmlFor="id">아이디</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      id="id"
                      type="text"
                      placeholder="아이디를 입력하세요"
                      className="input border border-gray-300 p-2 rounded-xl h-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                      disabled={isIdVerified} // 아이디 검증되면 disabled
                    />
                  </FormControl>
                  <FormMessage />
                  {idError && <p className="text-red-500 mt-1">{idError}</p>}
                  {isIdVerified && (
                    <p className="text-black mt-1">사용 가능한 아이디입니다.</p>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="button" // form submission과는 별도로 작동하게 설정
              size="sm"
              variant="starbucks"
              onClick={handleVerifyId} // Promise로 검증 함수 호출
              className="h-full whitespace-nowrap mt-6 py-2 px-4"
            >
              중복확인
            </Button>
          </section>
          <hr />
          {/* 비밀번호 필드 */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col w-2/3">
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 비밀번호 확인 필드 */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col w-2/3">
                <FormLabel htmlFor="confirmPassword">비밀번호 확인</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />

          {/* 닉네임 필드 */}
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem className="flex flex-col w-2/3">
                <FormLabel htmlFor="nickname">닉네임</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="nickname"
                    type="text"
                    placeholder="닉네임을 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* 제출 버튼 */}
          <Button variant="starbucks" type="submit" className="mx-auto">
            가입 완료
          </Button>

          {/* 에러 메시지 */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </Form>
    </div>
  );
}
