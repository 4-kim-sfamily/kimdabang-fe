import React from "react";

interface CouponStarGroupProps {
  children: React.ReactNode;
}

export default function CouponStarGroup({ children }: CouponStarGroupProps) {
  return <section className="flex">{children}</section>;
}
