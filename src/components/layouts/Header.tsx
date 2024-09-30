import { getCategoryList } from "@/actions/main/category";
import Link from "next/link";
import { Cart, Hearts, Search, StarbucksLogo } from "../icons/Index";
import HeaderHamburger from "../pages/category/HeaderHamburger";

export default async function Header() {
  const data = await getCategoryList();
  return (
    <header className="fixed top-0 left-0 bg-[#006241] w-full z-10 h-[56px] flex items-center">
      <nav className="flex w-full justify-between p-4 items-center">
        <ul className="flex gap-3 items-center">
          <li>
            <HeaderHamburger data={data} />
          </li>
          <li>
            <Link href="/">
              <h1 className="text-[0px]">Starbucks</h1>
              <StarbucksLogo />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <Link href="/search">
              <Search />
            </Link>
          </li>
          <li>
            <Link href="/like">
              <Hearts />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Cart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
