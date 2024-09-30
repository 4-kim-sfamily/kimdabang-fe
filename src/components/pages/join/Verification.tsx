"use client"; // 클라이언트 컴포넌트임을 명시

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import phone from "../../icons/verification/phone.png";
import toss from "../../icons/verification/toss-logo.jpg";

export default function Verification({ onNext }) {
  const [isVerifying, setIsVerifying] = useState(false); // 인증 진행 중 상태 관리
  const [selectedMethod, setSelectedMethod] = useState("");

  // 동의 여부 확인하여 리다이렉트 처리
  const handleVerification = () => {
    setIsVerifying(true);

    // 1.5초 후 페이지 이동
    setTimeout(() => {
      onNext();
    }, 1000);
  };
  // 본인 인증 요청 처리
  // const handleVerification = async () => {
  //   setIsVerifying(true); // 인증 진행 중 상태로 변경
  //   try {
  //     const res = await fetch("https://cert.toss.im"); // 실제 인증 요청
  //     if (res.ok) {
  //       const data = await res.json();
  //       // 성공 시 처리
  //       // 인증 성공 후 처리 로직 추가
  //     } else {
  //       console.error("인증 실패:", res.statusText);
  //     }
  //   } catch (error) {
  //     console.error("인증 요청 중 오류 발생:", error);
  //   } finally {
  //     setIsVerifying(false); // 인증 완료 후 상태 해제
  //   }
  // };

  // // 인증을 완료했다고 가정하고 다음 단계로 이동
  // const handleSubmit = () => {
  //   onNext();
  // };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div>
      <h1 className="font-extrabold text-2xl">
        본인 확인을 위해 <br />
        인증을 진행해 주세요
      </h1>
      <ul className="flex flex-col gap-4 my-5">
        <li className="flex items-center border-[1px] py-4 rounded-xl justify-between px-5">
          <label
            htmlFor="toss-method"
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src={toss} alt="toss icon" width={35} height={35} />
            <div>
              <h2 className="text-lg">토스로 회원 가입하기</h2>
              <h3 className="text-xs">5초만에 간편하게 인증할 수 있어요</h3>
            </div>
          </label>
          <input
            id="toss-method"
            type="radio"
            value="toss"
            checked={selectedMethod === "toss"}
            onChange={handleRadioChange}
          />
        </li>

        <li className="flex items-center border-[1px] py-4 rounded-xl justify-between px-5">
          <label
            htmlFor="phone-method"
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="aspect-square relative w-[35px] h-[35px] rounded-full bg-[#55b98f] pt-1">
              <Image
                src={phone}
                alt="phone icon"
                layout="intrinsic"
                height={28}
                priority
                className="object-fit mx-auto"
              />
            </div>
            <div>
              <h2 className="text-lg">휴대폰 본인 인증하기</h2>
              <h3 className="text-xs">본인 명의 휴대폰으로 인증할 수 있어요</h3>
            </div>
          </label>
          <input
            id="phone-method"
            type="radio"
            value="phone"
            checked={selectedMethod === "phone"}
            onChange={handleRadioChange}
            // 숨김 처리하여 label로 클릭 가능하게 함
          />
        </li>
      </ul>
      {/* <Progress value={33} /> */}
      {/* 인증하기 버튼 */}
      {/* <Button
        variant={isVerifying ? "disabled" : "starbucks"} // 인증 중일 때 버튼 비활성화
        onClick={handleVerification}
        disabled={isVerifying} // 인증 중일 때 클릭 방지
      >
        {isVerifying ? "인증 중..." : "인증하기"}
      </Button> */}
      {/* 인증을 건너뛰고 다음 단계로 이동 */}
      <div className="w-full fixed box-border left-0 bottom-0 py-3 bg-white border-[2px] rounded-t-xl">
        <Button
          variant="starbucks"
          onClick={handleVerification}
          className="m-auto"
          disabled={isVerifying} // 인증 중일 때 버튼 비활성화
        >
          {isVerifying ? "인증 중..." : "인증하기"}
        </Button>
      </div>
    </div>
  );
}
