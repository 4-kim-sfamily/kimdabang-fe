"use client";
import { useEffect, useState } from "react";
import DownwardArrow from "../icons/DownwardArrow";
import { useButtonGroup } from "../pages/main/OptionContext";
import { Button } from "./button";
import CategoryRadioGroup from "./CategoryRadioGroup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
export default function OptionDialog() {
  const { selectedButton } = useButtonGroup();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedButton) {
      setOpen(false);
    }
  }, [selectedButton]);

  return (
    <div className="">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex relative">
            <div className="absolute w-2 h-[36px] right-9 gradient-background" />
            <Button
              variant="optionArrow"
              className="p-0 m-0 w-9 h-9 rounded-none lg:hidden"
              onClick={() => {}}
            >
              <DownwardArrow degree={0} />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white px-0 rounded-tl-xl rounded-tr-xl h-[41%] w-[100%] ">
          <DialogHeader>
            <DialogTitle className="w-[100%] border-b pb-4 ">
              전체 카테고리
            </DialogTitle>
            <DialogDescription className=" w-[100%] p-3 h-[65%] overflow-y-scroll scroll-item">
              <CategoryRadioGroup />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
