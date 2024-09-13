import { getUserData } from "@/actions/mypage/getUserData";
import LogoutButton from "./LogoutButton";

export default async function MyPageTitle() {
  const userData = await getUserData();

  return (
    <header>
      <div className="flex justify-between">
        <h3 className="text-xl my-1">{userData.nickname}님</h3>
        <LogoutButton />
      </div>
      <h4 className="font-extrabold">스타벅스에서 즐거운 쇼핑 되세요!</h4>
    </header>
  );
}
