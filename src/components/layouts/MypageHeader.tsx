import CategoryClose from "../icons/CategoryClose";
import BackwardButton from "../ui/BackwardButton";

export default function MypageHeader({ title }: { title: string }) {
  return (
    <header className=" bg-[white] w-full z-10 h-[56px] flex items-center shadow-md">
      <p className=" ml-[50%] translate-x-[-50%] font-extrabold">{title}</p>
      <div className="absolute right-3 top-[2.5%]">
        <BackwardButton url="mypage">
          <CategoryClose color="#444444" />
        </BackwardButton>
      </div>
    </header>
  );
}
