import StarbucksIcon from "@/components/icons/StarbucksIcon";

export default function WelcomeMessage() {
  return (
    <div className="flex flex-col ">
      <div className="mt-5 mb-5 w-16">
        <StarbucksIcon />
      </div>

      <p className="text-2xl font-extrabold mb-2">
        안녕하세요. <br />
        스타벅스입니다.
      </p>

      <span className="font-light mb-8">
        회원 서비스 이용을 위해 로그인 해주세요.
      </span>
    </div>
  );
}
