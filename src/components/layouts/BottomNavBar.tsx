import { Hamburger, Home, MyPage, Present, RecentGood } from "../icons/Index";

export default function BottomNavBar() {
  return (
    <nav className="bottom-nav" aria-label="Bottom Navigation">
      <ul className="bottom-nav-list">
        <li className="bottom-nav-item">
          <button className="bottom-nav-button">
            <Hamburger color="black" />
            <span className="bottom-nav-span">카테고리</span>
          </button>
        </li>
        <li className="bottom-nav-item">
          <button className="bottom-nav-button">
            <Present />
            <span className="bottom-nav-span">선물하기</span>
          </button>
        </li>
        <li className="bottom-nav-item">
          <button className="bottom-nav-button">
            <Home />
            <span className="bottom-nav-span">홈</span>
          </button>
        </li>
        <li className="bottom-nav-item">
          <button className="bottom-nav-button">
            <MyPage />
            <span className="bottom-nav-span">MY</span>
          </button>
        </li>
        <li className="bottom-nav-item">
          <button className="bottom-nav-button">
            <RecentGood />
            <span className="bottom-nav-span">최근본</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
