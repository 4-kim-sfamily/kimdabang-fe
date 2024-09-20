import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const join = async (
  userData: any,
  agreementData: any,
  providerInfo: any,
) => {
  const requestBody = {
    termsChecked: agreementData.termsChecked,
    privacyChecked: agreementData.privacyChecked,
    cardChecked: agreementData.cardChecked,
    emailChecked: agreementData.emailChecked,
    smsChecked: agreementData.smsChecked,
    loginId: userData.id, // 아이디를 loginId로 변경
    password: userData.password, // 비밀번호
    provider: providerInfo.provider ? providerInfo.provider : "", // 소셜 로그인 제공자
    providerId: providerInfo.providerAccountId
      ? providerInfo.providerAccountId
      : "", // 소셜 로그인 제공자 ID
    name: userData.name, // 이름
    email: userData.email, // 이메일
    phone: userData.phone, // 전화번호
    gender: userData.gender, // 성별
    solar: userData.solar, // 양력/음력 여부
    birth: userData.birth, // 생년월일
    nickname: userData.nickname, // 닉네임
  };
  console.log("회원가입", requestBody);
  const data = await fetchData<commonResType<null>>(
    `/api/v1/auth/join`,
    "POST",
    requestBody,
  );
  console.log("마지막 회원가입", data);
};
