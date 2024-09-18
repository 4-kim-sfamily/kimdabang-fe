import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const join = async (userData: any, agreementData: any) => {
  const requestBody = {
    termsChecked: agreementData.termsChecked,
    privacyChecked: agreementData.privacyChecked,
    cardChecked: agreementData.cardChecked,
    emailChecked: agreementData.emailChecked,
    smsChecked: agreementData.smsChecked,
    loginId: userData.id, // 아이디를 loginId로 변경
    password: userData.password, // 비밀번호
    kakaoId: "", // Kakao ID는 없으므로 빈 문자열로 설정 (필요시 설정)
    name: userData.name, // 이름
    email: userData.email, // 이메일
    phone: userData.phone, // 전화번호
    gender: userData.gender, // 성별
    solar: userData.solar, // 양력/음력 여부
    birth: userData.birth, // 생년월일
    nickname: userData.nickname, // 닉네임
  };
  const data = await fetchData<commonResType<null>>(
    `/api/v1/auth/join`,
    "POST",
    requestBody,
  );
  console.log("가입 결과:", data);
};
