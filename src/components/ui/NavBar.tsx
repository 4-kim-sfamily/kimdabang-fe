import { getCategoryList } from "@/actions/main/category";
import Link from "next/link";

export interface navType {
  id: number;
  link: number;
  name: string;
}

export default async function NavBar() {
  const data = await getCategoryList();
  return (
    <nav className="headerNavBar overflow-x-scroll w-full bg-[#006241] mt-[56px]">
      <ul className="flex overflow-auto w-[100%] items-center scroll-item h-[45px] text-sm">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/category/${item.id}`} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
