export default function AddressSection() {
  return (
    <section className="mt-[56px] w-full p-3 text-sm">
      <ul className="flex justify-between">
        <li className="flex gap-1 items-center">
          <p className="font-extrabold">김예진</p>
          <div className="text-[8px] h-[13px] text-[#12BD84] bg-[#B8ECDA] rounded-sm px-[3px] leading-[13px]">
            기본
          </div>
        </li>

        <button className="text-[#a88855]">배송지 변경</button>
      </ul>
      <p>{`(48060) 부산광역시 해운대구 apec로 17 (우동) 4층`}</p>
    </section>
  );
}
