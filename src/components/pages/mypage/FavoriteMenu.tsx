export default function FavoiriteMenu() {
  return (
    <section>
      <h3 className="bg-[#006241] text-lg text-white">자주 찾는 메뉴</h3>
      <div className="mt-2 grid grid-cols-5 gap-3 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="p-8 w-[50%] h-auto aspect-[10/10] bg-gray-200 rounded-3xl"></div>
          <p className="text-center">좋아요</p>
        </div>
      </div>
    </section>
  );
}
