import Link from "next/link";

export default function ManageOrder() {
  return (
    <section className=" flex flex-col text-[0.7rem]  ">
      <header className=" bg-[#006241] text-lg text-white font-bold my-4 px-3">
        나의 주문관리
      </header>
      <div className="text-gray-400 flex flex-row gap-[50%] px-2">
        <ul className="flex flex-col space-y-2">
          <li>주문/배송조회</li>
          <li>항공권 예약조회</li>
          <li>선물함</li>
          <li>정기배송 설정 관리</li>
        </ul>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href={`mypage/purchase-history`}>구매내역</Link>
          </li>
          <li>호텔 예약조회</li>
          <li>자주구매 상품</li>
        </ul>
      </div>
    </section>
  );
}
