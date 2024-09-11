"use client";

import { useAgreement } from "@/app/context/AgreementContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요."),
    gender: z.enum(["남성", "여성", "기타"]),
    id: z.string().min(4, "ID는 4글자 이상으로 입력해주세요."),
    email: z.string().email("유효한 이메일 주소를 입력해주세요."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string().min(8, "비밀번호 확인을 입력해주세요."),
    phone: z.string().min(9, "전화번호를 올바르게 입력해주세요."),
    dob: z.date({
      required_error: "생년월일을 선택해주세요.",
    }),
    nickname: z.string().min(3, "닉네임을 3글자 이상으로 입력해주세요"),
    calendarType: z.enum(["solar", "lunar"]).default("solar"), // 기본값 설정
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export function JoinForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      calendarType: "solar",
    },
  });

  const { setAgreementData, agreementData } = useAgreement();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(
    data: z.infer<typeof FormSchema>,
    event?: BaseSyntheticEvent,
  ) {
    if (event) {
      event.preventDefault();
    }

    // 1. 상태 업데이트
    setAgreementData((prev) => ({
      ...prev,
      userData: {
        id: data.id,
        password: data.password,
        name: data.name,
        gender: data.gender,
        nickname: data.nickname,
        birth: data.dob,
        solar: data.calendarType === "solar",
        email: data.email,
        phone: data.phone,
      },
    }));

    // 2. fetch 요청을 보낼 준비 완료 표시
    setIsSubmitting(true);
  }

  // 3. agreementData가 변경되었을 때 fetch를 보내는 useEffect 추가
  useEffect(() => {
    if (isSubmitting) {
      const submitData = async () => {
        try {
          const res = await fetch(
            "http://qkr99102.asuscomm.com:18193/api/v1/auth/join",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                agreementData,
              }),
            },
          );

          if (res.ok) {
            router.push("/member/join/complete");
          } else {
            console.log(agreementData);
            console.log("error");
          }
        } catch (error) {
          console.error("비밀번호 해싱 오류:", error);
        } finally {
          // 4. 요청이 끝나면 상태를 초기화
          setIsSubmitting(false);
        }
      };

      submitData();
    }
  }, [isSubmitting, agreementData, router]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <section className="flex gap-2">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel htmlFor="name">이름</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      id="name"
                      type="text"
                      placeholder="이름을 입력하세요"
                      className="input border  border-gray-300 p-2 rounded-xl"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-4">
                  <FormLabel htmlFor="gender">성별</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          id="gender-male"
                          type="radio"
                          value="남성"
                          checked={field.value === "남성"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">남성</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          id="gender-female"
                          type="radio"
                          value="여성"
                          checked={field.value === "여성"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">여성</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          id="gender-others"
                          type="radio"
                          value="기타"
                          checked={field.value === "기타"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">기타</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </section>

          <section className="birth-section flex gap-5">
            {/* Date of Birth Field */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel htmlFor="dob">생년월일</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          id="dob"
                          className={cn(
                            "w-[240px] pl-3 text-left px-2 font-normal rounded-xl relative z-10 border-[0.1rem] border-gray-300",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>날짜를 선택하세요</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 align-start absolute z-20 bg-white opacity-100 shadow-lg">
                      <div className="opacity-100 backdrop-blur-sm">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* 양력/음력 Radio Buttons */}
            <FormField
              control={form.control}
              name="calendarType"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-4">
                  <FormLabel htmlFor="calendarType">음력 / 양력</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          id="calendarType-solar"
                          type="radio"
                          value="solar"
                          checked={field.value === "solar"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">양력</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          id="calendarType-lunar"
                          type="radio"
                          value="lunar"
                          checked={field.value === "lunar"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">음력</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </section>

          {/* ID Field */}
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="id">ID</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="id"
                    type="text"
                    placeholder="ID를 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col">
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
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col">
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
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="email">이메일</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          {/* Nickname Field */}
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="nickname">닉네임</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="nickname"
                    type="text"
                    placeholder="사용할 닉네임을 입력해주세요."
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          {/* Nickname Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel htmlFor="phone">전화번호</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    id="phone"
                    type="text"
                    placeholder="전화번호를 입력해주세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button variant="starbucks" type="submit" className="mx-auto">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
