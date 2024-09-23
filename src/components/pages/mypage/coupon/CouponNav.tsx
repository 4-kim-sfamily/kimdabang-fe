"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CouponNav() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [barPosition, setBarPosition] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  const links = [
    { href: "/mypage/coupon/allCoupon", label: "모든 쿠폰" },
    { href: "/mypage/coupon/myCoupon", label: "내 쿠폰" },
  ];

  useEffect(() => {
    const currentLink = links.find((link) => link.href === pathname);
    if (currentLink) {
      const linkElement = document.getElementById(currentLink.href);
      if (linkElement) {
        setBarPosition(linkElement.offsetLeft);
        setBarWidth(linkElement.offsetWidth);
      }
    }
  }, [pathname]);

  return (
    <div className="relative flex w-full gap-5 px-4 mt-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          id={link.href}
          className={`relative pb-2 px-2 ${
            activeLink === link.href ? "font-bold text-black" : "text-gray-500"
          }`}
          onClick={() => setActiveLink(link.href)}
        >
          {link.label}
        </Link>
      ))}
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300"
        style={{ width: barWidth, transform: `translateX(${barPosition}px)` }}
      />
    </div>
  );
}
