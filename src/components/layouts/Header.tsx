import Link from "next/link";
import { Cart, Hamburger, Hearts, Search, StarbucksLogo } from "../icons/Index";

export const Header = () => {
  return (
    <header className="flex bg-[#006241] w-full h-[56px] items-center">
      <nav className="flex w-full justify-between p-4 items-center">
        <ul className="flex gap-3 items-center">
          <li>
            <Hamburger />
          </li>
          <li>
            <StarbucksLogo />
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <Search />
          </li>
          <li>
            <Hearts />
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
};
