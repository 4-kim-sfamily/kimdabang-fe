import { Card, Present } from "@/components/icons/Index";
import { Button } from "@/components/ui/button";

export default function PaymentButtons({ count }: { count: number }) {
  const isDisabled = count === 0 ? true : false;
  return (
    <div className="flex justify-between">
      <Button
        size="md"
        variant={isDisabled ? "disable" : "inversion"}
        className={`px-0 w-[47%] ${isDisabled ? " cursor-not-allowed" : ""}`}
        disabled={isDisabled}
      >
        <Present color={isDisabled ? "#909193" : "#01a862"} />
        &nbsp;선물하기
      </Button>
      <Button
        size="md"
        variant="starbucks"
        className={`px-0 w-[47%] ${isDisabled ? " cursor-not-allowed bg-[#909195]" : ""}`}
        disabled={isDisabled}
      >
        <Card />
        &nbsp;구매하기
      </Button>
    </div>
  );
}
