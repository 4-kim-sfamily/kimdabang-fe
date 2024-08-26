import { Hamburger, Home, MyPage, Present, RecentGood } from "../icons/Index";

export default function BottomNavBar() {
  return (
    <nav className="bottom-app-nav">
      <button className="bottom-app-button">
        <Hamburger color="black" />
        <span className=" bottom-app-span">카테고리</span>
      </button>
      <button className="bottom-app-button">
        <Present />
        <span className="bottom-app-span">선물하기</span>
      </button>
      <button className="bottom-app-button">
        <Home />
        <span className="bottom-app-span">홈</span>
      </button>
      <button className="bottom-app-button">
        <MyPage />
        <span className="bottom-app-span">MY</span>
      </button>
      <button className="bottom-app-button">
        <RecentGood />
        <span className="bottom-app-span">최근본</span>
      </button>
    </nav>
  );
}
