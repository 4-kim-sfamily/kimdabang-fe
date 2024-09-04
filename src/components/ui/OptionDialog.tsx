import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import largeCategories from "../../lib/dummy/main/OnlyLargeCategory.json";
import DownwardArrow from "../icons/DownwardArrow";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Label } from "./label";
export default function OptionDialog() {
  return (
    <div>
      <Dialog>
        <div>
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
        </div>
        <DialogContent className="bg-white px-0 rounded-tl-[5%] rounded-tr-[5%] h-[41%] w-[90%] ">
          <DialogHeader>
            <DialogTitle className="w-[100%] border-b pb-4 px-5">
              전체 카테고리
            </DialogTitle>
            <DialogDescription className=" w-[100%] p-6 h-[65%] overflow-y-scroll scroll-item">
              <RadioGroup defaultValue="1">
                {largeCategories.largeCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={category.id.toString()}
                      id={category.id.toString()}
                    />
                    <Label htmlFor={category.id.toString()} className="text-sm">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
