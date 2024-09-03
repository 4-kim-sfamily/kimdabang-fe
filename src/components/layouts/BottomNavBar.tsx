import Image from "next/image";
import Link from "next/link";
import { Hamburger, Home, MyPage, Present, RecentGood } from "../icons/Index";

export default async function BottomNavBar() {
  let recentImage = null;

  try {
    const response = await fetch(
      // API 개발시 사용될 코드
      // `${process.env.BACKEND_URL}/api/v1/most-recently-viewed-products`,
      // { cache: "no-store" }
      `https://picsum.photos/300/300`,
    );
    if (response.ok) {
      const data = await response.json();
      recentImage = data.image || null;
    }
  } catch (error) {
    console.error("Failed to fetch recend Image", error);
  }
  return (
    <nav className="bottom-nav" aria-label="Bottom Navigation">
      <ul className="bottom-nav-list">
        <li className="bottom-nav-item">
          <Link href="/allCategories">
            <button className="bottom-nav-button">
              <Hamburger color="black" />
              <span className="bottom-nav-span">카테고리</span>
            </button>
          </Link>
        </li>
        <li className="bottom-nav-item">
          <Link href="/present">
            <button className="bottom-nav-button">
              <Present />
              <span className="bottom-nav-span">선물하기</span>
            </button>
          </Link>
        </li>
        <li className="bottom-nav-item">
          <Link href="/">
            <button className="bottom-nav-button">
              <Home />
              <span className="bottom-nav-span">홈</span>
            </button>
          </Link>
        </li>
        <li className="bottom-nav-item">
          <Link href="/myPage">
            <button className="bottom-nav-button">
              <MyPage />
              <span className="bottom-nav-span">MY</span>
            </button>
          </Link>
        </li>
        <li className="bottom-nav-item">
          <Link href="/recentGoods">
            <button className="bottom-nav-button">
              {recentImage ? (
                <Image
                  src={recentImage}
                  alt="Recent Goods"
                  className="recent-goods-image"
                />
              ) : (
                <RecentGood />
              )}
              <span className="bottom-nav-span">최근본</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
