import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

interface verifyType {
  verification: boolean;
}

// 이메일 검증 함수
export const verifyEmail = async (key: string): Promise<boolean> => {
  try {
    const data = await fetchData<commonResType<verifyType>>(
      "/api/v1/auth/verifyemail",
      "POST",
      { key: key }, // JSON 객체로 key를 전송
      "no-store",
    );
    return data.data.verification;
  } catch (error) {
    console.error(error);
    throw new Error("이메일 검증에 실패했습니다.");
  }
};
