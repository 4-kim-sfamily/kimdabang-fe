import BackwardButton from "../ui/BackwardButton";

export default function WhiteHeader() {
  return (
    <div className="fixed top-0 left-0 bg-[white] w-full z-10 h-[56px] flex items-center">
      <div className="absolute left-3 top-[25%]">
        <BackwardButton />
      </div>

      <p className=" ml-[50%] translate-x-[-50%] font-extrabold">장바구니</p>
    </div>
  );
}
