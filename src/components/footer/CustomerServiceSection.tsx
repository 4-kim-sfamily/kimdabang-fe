import { CustomerServiceIcon } from "../icons/Index";

export default function CustomerServiceSection() {
  return (
    <section>
      <div className="flex-col justify-between items-center py-4 px-6 bg-gray-400">
        <div className="flex justify-center items-center text-white mb-1">
          <CustomerServiceIcon />
          <div className="ml-2 ">
            <h4 className="text-[11px] font-bold">
              SPHAROS.COM 고객센터 / 전자금융거래 분쟁처리
            </h4>
            <p>1500-0000 / SPHAROS@SPHAROS.com</p>
          </div>
        </div>

        <div className="flex items-center justify-center text-white gap-2">
          <button className="bg-gray-600 px-3 py-2  text-[12px] md:text-[14px] rounded">
            전화 걸기
          </button>
          <button className="bg-gray-600 px-3 py-2 text-[12px] md:text-[14px] rounded ">
            1:1 고객센터
          </button>
        </div>
      </div>
    </section>
  );
}
