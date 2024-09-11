import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import LogoutButton from "./LogoutButton";

export default async function MyPageTitle() {
  const session = await getServerSession(options);
  let userData = { nickname: "GUEST" }; // 기본 값을 설정해줍니다.

  if (session?.user?.accessToken) {
    console.log(session.user.accessToken);
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/user/get-user`, {
      method: "GET",
      headers: {
        Authorization: `${session.user.accessToken}`, // accessToken을 헤더에 추가
        // Authorization: `Bearer ${session.user.accessToken}`, // accessToken을 헤더에 추가
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      userData = await res.json(); // userData를 업데이트
      console.log(userData);
    } else {
      console.log(await res.json());
      console.error("사용자 정보 fetch 실패");
    }
  }
  return (
    <header>
      <div className="flex justify-between">
        <h3 className="text-xl my-1">
          {userData.data.nickname ? userData.data.nickname : "GUEST"}님
        </h3>
        <LogoutButton />
      </div>
      <h4 className="font-extrabold">스타벅스에서 즐거운 쇼핑 되세요!</h4>
    </header>
  );
}
