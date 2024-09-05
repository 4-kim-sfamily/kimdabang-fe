// 데이터 구조를 위한 인터페이스 정의
interface FavoriteMenu {
  id: number;
  iconName: string;
  imageUrl: string;
}

export default async function FavoiriteMenu() {
  // json-server에서 데이터를 fetch
  const res = await fetch(`${process.env.JSONSERVER_URL}/favoriteMenus`, {
    cache: "no-store", // 실시간 데이터 반영을 위해 cache 설정
  });

  // 데이터에 대한 타입을 FavoriteMenu[]로 명시
  const favoriteMenus: FavoriteMenu[] = await res.json();

  return (
    <section>
      <h3 className="bg-[#006241] text-lg text-white">자주 찾는 메뉴</h3>
      <div className="mt-2 grid grid-cols-5 gap-3 items-center justify-center">
        {/* 데이터를 map 함수로 렌더링 */}
        {favoriteMenus.map((menu: FavoriteMenu) => (
          <div
            key={menu.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={menu.imageUrl}
              alt={menu.iconName}
              className="w-full h-full object-contain"
            />
            <p className="text-center">{menu.iconName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
