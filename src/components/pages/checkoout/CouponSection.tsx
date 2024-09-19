import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CouponSection() {
  return (
    <section className="flex flex-col">
      쿠폰 및 할인
      <Link href="checkout/coupon">
        <Button variant="inversion" size="icon" className="mx-auto">
          쿠폰
        </Button>
      </Link>
      <Button variant="inversion" className="mx-auto">
        모바일 상품권
      </Button>
      {/* 할인혜택 들어갈 곳 */}
    </section>
  );
}
