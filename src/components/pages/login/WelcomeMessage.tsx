import StarbucksIcon from "@/components/icons/StarbucksIcon";

export default function WelcomeMessage({
  MessageType,
}: {
  MessageType: string;
}) {
  return (
    <div className="flex flex-col ">
      <div className=" mb-5 w-16">
        <StarbucksIcon />
      </div>

      <p className="text-2xl font-extrabold mb-2">
        {MessageType === "login" ? (
          <>
            안녕하세요. <br /> 스타벅스입니다.
          </>
        ) : (
          <>
            고객님! <br /> 환영합니다!
          </>
        )}
      </p>
      {MessageType === "login" && (
        <span className="font-light mb-8">
          회원 서비스 이용을 위해 로그인 해주세요.
        </span>
      )}
    </div>
  );
}
