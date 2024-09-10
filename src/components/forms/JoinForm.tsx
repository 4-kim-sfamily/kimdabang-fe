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
import { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요."),
    id: z.string().min(4, "ID는 4글자 이상으로 입력해주세요.."),
    email: z.string().email("유효한 이메일 주소를 입력해주세요."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string().min(8, "비밀번호 확인을 입력해주세요."),
    dob: z.date({
      required_error: "생년월일을 선택해주세요.",
    }),
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
      calendarType: "solar", // 기본값 설정
    },
  });

  const { setAgreementData } = useAgreement(); // useAgreement 훅 사용

  function onSubmit(
    data: z.infer<typeof FormSchema>,
    event?: BaseSyntheticEvent,
  ) {
    console.log(data);

    // AgreementContext에 userData 저장
    setAgreementData((prev) => ({
      ...prev,
      userData: {
        id: data.id,
        hashedPwd: data.password, // 비밀번호를 실제로 해시해야 함
        username: data.name,
        birth: data.dob,
        solar: data.calendarType === "solar",
        email: data.email,
      },
    }));

    if (event) {
      event.preventDefault(); // 기본 동작 차단
    }
    router.push("/member/join/complete");
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="이름을 입력하세요"
                    className="input border  border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <section className="birth-section flex gap-4 ">
            {/* Date of Birth Field */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>생년월일</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          className={cn(
                            "w-[240px] pl-3 text-left px-2 font-normal rounded-xl relative z-10 border-2 border-gray-300",
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
                      {/* 절대 위치 및 z-index 설정 */}
                      <div className="opacity-100 backdrop-blur-sm">
                        {/* backdrop-blur로 배경을 흐리게 */}
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
                  <FormLabel>음력 / 양력</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-4">
                      {/* 양력 선택 */}
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="solar"
                          checked={field.value === "solar"}
                          onChange={field.onChange}
                          className="radio"
                        />
                        <span className="whitespace-nowrap">양력</span>
                      </label>
                      {/* 음력 선택 */}
                      <label className="flex items-center space-x-2">
                        <input
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
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="text"
                    placeholder="ID를 입력하세요"
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
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="이메일을 입력하세요"
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
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <input
                    {...field}
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
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
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
