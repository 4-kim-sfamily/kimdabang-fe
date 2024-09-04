import { Button } from "@/components/ui/button";

export default function DeliveryHeader() {
  return (
    <header className="flex justify-between font-bold my-2">
      <h2>주문/배송 조회</h2>
      <Button variant="inversion" size="free" className="p-2 text-xs">
        배송지 관리
      </Button>
    </header>
  );
}
