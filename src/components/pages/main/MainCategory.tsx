import CategoryCard from "@/components/main/CategoryCard";
import Link from "next/link";

const data = [
  {
    id: 2,
    name: "텀블러/보온병",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318295153435661206566_757.jpg&w=182&h=0",
  },
  {
    id: 3,
    name: "컵/머그",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318301879707787942778_933.jpg&w=182&h=0",
  },
  {
    id: 8,
    name: "커피/티용품",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318303114102143113214_833.jpg&w=182&h=0",
  },
  {
    id: 11,
    name: "라이프스타일",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318304521702972323297_875.jpg&w=182&h=0",
  },
  {
    id: 17,
    name: "e-gift",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318310061765697618569_474.jpg&w=182&h=0",
  },
  {
    id: 6,
    name: "디저트",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202402/2024021315330567605073503507_739.png&w=182&h=0",
  },
  {
    id: 5,
    name: "베이커리",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318312434168660228866_404.jpg&w=182&h=0",
  },
  {
    id: 16,
    name: "음료/요거트",
    imgUrl:
      "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202211/2022110318320301762623758262_485.png&w=182&h=0",
  },
];

export default function MainCategory() {
  return (
    <ul className="grid grid-cols-4 place-items-center gap-2 my-8 md:grid-cols-8">
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/category/${item.id}`}>
            <CategoryCard name={item.name} imgUrl={item.imgUrl} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
