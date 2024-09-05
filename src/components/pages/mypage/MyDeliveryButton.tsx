import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function MyDeliveryButton() {
  return (
    <Link href="/mydelivery">
      <Button variant="mypageButton">주문/배송 조회 보러가기›</Button>
    </Link>
  );
}
