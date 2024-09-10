import { Button } from "@/components/ui/button";

export default function QnA() {
  return (
    <section>
      <h3 className="font-extrabold my-4 px-2">Q&A 문의</h3>
      <div className="flex justify-center">
        <Button variant="inversion" size="free" className="whitespace-nowrap">
          상품 배송 일정 문의
        </Button>
        <Button variant="inversion" size="free" className="whitespace-nowrap">
          취소/교환/반품 문의
        </Button>
      </div>
    </section>
  );
}
