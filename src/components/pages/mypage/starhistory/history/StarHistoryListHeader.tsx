import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StarHistoryListHeader({ startDate, endDate }) {
  return (
    <div className="flex justify-between items-center mt-2 px-4">
      <p>{`${startDate} ~ ${endDate}`}</p>
      <Link href="starhistory/search">
        <Button variant="starbucks" size="free">
          기간 설정
        </Button>
      </Link>
    </div>
  );
}
