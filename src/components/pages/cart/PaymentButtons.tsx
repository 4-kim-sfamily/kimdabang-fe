import { Card, Present } from "@/components/icons/Index";
import { Button } from "@/components/ui/button";

export default function PaymentButtons() {
  return (
    <div className="flex justify-between">
      <Button size="md" variant="inversion" className="px-0 w-[47%]">
        <Present color="#01a862" />
        선물하기
      </Button>
      <Button size="md" variant="starbucks" className="px-0 w-[47%]">
        <Card />
        구매하기
      </Button>
    </div>
  );
}
