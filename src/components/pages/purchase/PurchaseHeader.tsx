"use client";
import { Button } from "@/components/ui/button";
import DateRangePicker from "@/components/ui/DateRangePicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function PurchaseHeader({
  start,
  end,
}: {
  start?: string;
  end?: string;
}) {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  let DefaultstartDate = start ? start : oneYearAgo.toISOString().split("T")[0];
  let DefaultendDate = end ? end : today.toISOString().split("T")[0];
  const [popoverOpen, setPopoverOpen] = useState(false);

  const closePopover = () => {
    setPopoverOpen(false);
  };
  return (
    <div className="flex justify-between items-center mt-2 px-2">
      <p>{`${DefaultstartDate} ~ ${DefaultendDate}`}</p>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <div className="flex">
            <Button
              variant="starbucks"
              size="md"
              className="w-full h-9 items-center m-0"
            >
              기간 설정
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="border-spacing-0 bg-transparent">
          <DateRangePicker closePopover={closePopover} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
