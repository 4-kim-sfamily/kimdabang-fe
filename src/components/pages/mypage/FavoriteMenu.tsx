import Link from "next/link";

// 데이터 구조를 위한 인터페이스 정의
interface FavoriteMenu {
  id: number;
  iconName: string;
  imageUrl: string;
  linkUrl: string;
}

export default async function FavoiriteMenu() {
  // json-server에서 데이터를 fetch

  // 데이터에 대한 타입을 FavoriteMenu[]로 명시
  const favoriteMenus: FavoriteMenu[] = [
    {
      id: 1,
      iconName: "좋아요",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_like@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/like",
    },
    {
      id: 2,
      iconName: "자주구매",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_freq@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/recent",
    },
    {
      id: 3,
      iconName: "이벤트현황",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_event@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/event",
    },
    {
      id: 4,
      iconName: "상품 Q&A",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_qna@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/qna",
    },
    {
      id: 5,
      iconName: "입고알림",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_alert@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/alert",
    },
    {
      id: 6,
      iconName: "선물함",
      imageUrl:
        "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_gift@3x.png?q=ae3bb648778634873359ce408f6a8d1016bb8979",
      linkUrl: "/gift",
    },
  ];

  return (
    <section>
      <h3 className="bg-[#006241] text-lg text-white px-3">자주 찾는 메뉴</h3>
      <div className="mt-2 grid grid-cols-5 gap-3 items-center justify-center">
        {/* 데이터를 map 함수로 렌더링 */}
        {favoriteMenus.map((menu: FavoriteMenu) => (
          <div
            key={menu.id}
            className="flex  flex-col items-center justify-center"
          >
            <Link href={menu.linkUrl}>
              <img
                src={menu.imageUrl}
                alt={menu.iconName}
                className="w-full h-full object-contain"
              />
            </Link>
            <p className="text-center whitespace-nowrap">{menu.iconName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
