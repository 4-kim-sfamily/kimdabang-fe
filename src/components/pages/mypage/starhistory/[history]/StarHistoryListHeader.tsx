import { Button } from "@/components/ui/button";

export default function StarHistoryListHeader() {
  return (
    <div className="flex justify-between items-center mt-1 px-2">
      <p>2023.09.15 ~ 2024.09.15</p>
      <Button variant="inversion" size="sm">
        기간 설정
      </Button>
    </div>
  );
}
