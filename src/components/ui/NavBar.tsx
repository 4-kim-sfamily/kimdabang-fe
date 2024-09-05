import { navData } from "@/data/initialData";
import Link from "next/link";

export interface navType {
  id: number;
  link: string;
  name: string;
}

export default function NavBar() {
  return (
    <nav className="overflow-x-scroll w-full bg-[#006241] mt-[56px]">
      <ul className="flex overflow-auto w-[100%] items-center scroll-item h-[45px] text-sm">
        {navData.map((item) => (
          <li key={item.id}>
            <Link href={`/category${item.link}`} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
