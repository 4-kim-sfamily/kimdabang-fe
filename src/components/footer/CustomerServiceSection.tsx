import { CustomerServiceIcon } from "../icons/Index";

export default function CustomerServiceSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-gray-400">
        {/* 아이콘과 텍스트를 정렬 */}
        <div className="flex items-center text-white">
          <CustomerServiceIcon />
          <div className="ml-2">
            <h4 className="text-[11px] font-bold">
              SPHAROS.COM 고객센터 / 전자금융거래 분쟁처리
            </h4>
            <p>1500-0000 / SPHAROS@SPHAROS.com</p>
          </div>
        </div>

        {/* 버튼을 텍스트 오른쪽에 정렬 */}
        <div className="flex items-center text-white mt-4 md:mt-0 gap-2">
          <button className="bg-gray-600 px-4 py-2 md:px-6 md:py-3 text-[12px] md:text-[14px] rounded min-h-[44px]">
            전화 걸기
          </button>
          <button className="bg-gray-600 px-4 py-2 md:px-6 md:py-3 text-[12px] md:text-[14px] rounded min-h-[44px]">
            1:1 고객센터
          </button>
        </div>
      </div>
    </section>
  );
}
