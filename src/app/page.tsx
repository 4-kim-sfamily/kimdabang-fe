import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="w-full ">
      {/* <StarbucksIcon></StarbucksIcon> */}
      <div className="text-center">
        <Button variant="starbucks">로그인하기</Button>
        <Button variant="starbucks" size="sm">
          선물하기 ㅇㅇ
        </Button>
        <Button variant="inversion" size="sm">
          구매하기 ㅇㅇ
        </Button>
      </div>

      <div className="flex flex-col">
        <button className=" mb-2 mx-6 bg-[#01a862] text-white py-3 rounded-full font-bold">
          로그인하기
        </button>
      </div>
    </div>
  );
}
