"use client";

import { BaseSyntheticEvent } from "react";
import {
  Button,
  Calendar,
  CalendarIcon,
  Form,
  format,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useAgreement,
  useForm,
  useRouter,
  z,
  zodResolver,
} from "./joinFromIndex"; // 경로를 적절히 맞춰주세요

// 폼 스키마 정의
const FormSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  gender: z.enum(["남성", "여성", "기타"]),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phone: z.string().min(9, "전화번호를 올바르게 입력해주세요."),
  dob: z.date({
    required_error: "생년월일을 선택해주세요.",
  }),
  calendarType: z.enum(["solar", "lunar"]).default("solar"),
});

export function JoinForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      calendarType: "solar", // 기본값 설정
    },
  });

  const { setAgreementData } = useAgreement();

  async function onSubmit(
    data: z.infer<typeof FormSchema>,
    event?: BaseSyntheticEvent,
  ) {
    if (event) {
      event.preventDefault(); // 기본 동작 차단
    }

    try {
      // AgreementContext에 userData 저장
      setAgreementData((prev) => ({
        ...prev,
        userData: {
          name: data.name,
          gender: data.gender,
          birth: data.dob,
          solar: data.calendarType === "solar",
          email: data.email,
          phone: data.phone,
        },
      }));

      router.push("/member/join/nextStep"); // 다음 단계로 이동
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }

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
                          className="w-[240px] pl-3 text-left px-2 font-normal rounded-xl relative z-10 border-[0.1rem] border-gray-300"
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

          {/* Phone Field */}
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
                    placeholder="전화번호를 입력하세요"
                    className="input border border-gray-300 p-2 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <Button variant="starbucks" type="submit" className="mx-auto">
            다음
          </Button>
        </form>
      </Form>
    </div>
  );
}
