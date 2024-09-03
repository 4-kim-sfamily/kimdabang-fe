import Link from "next/link";

import CustomerServiceIcon from "../icons/CustomerServiceIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 pb-20 font-NanumSquare">
      <div className="text-[12px] font-bold">
        <div className="flex justify-between items-center py-4 px-6  bg-gray-400">
          <div className="text-white">
            <CustomerServiceIcon />
            <h4 className="text-[11px] font-bold">
              SPHAROS.COM 고객센터 / 전자금융거래 분쟁처리
            </h4>
            <p>1500-0000 / SPHAROS@SPHAROS.com</p>
          </div>
          <div className=" text-white">
            <button className="bg-gray-600 mb-2 mx-2 px-4 py-2 rounded">
              전화걸기
            </button>
            <button className="bg-gray-600 mb-2 mx-2 px-4 py-2 rounded">
              1:1 고객센터
            </button>
          </div>
        </div>
        <div className="bg-gray-300 text-gray-600 px-2 py-2 flex flex-row justify-around">
          <Link href="/" className="px-4  hover:underline">
            홈
          </Link>
          <span>|</span>
          <Link href="/member/login" className="px-4  hover:underline">
            로그인
          </Link>
          <span>|</span>
          <Link href="/member/join" className="px-4  hover:underline">
            회원가입
          </Link>
          <span>|</span>
          <Link href="#" className="px-4 hover:underline">
            앱 다운로드
          </Link>
          <span>|</span>
          <Link href="#" className="px-4  hover:underline">
            PC버전
          </Link>
        </div>
        <div className="px-5">
          <div className="text-[10px] mt-2">
            <p className="text-[11px]">㈜스파로스</p>
            <address className="text-[#888888]">
              <p>대표자: 김남우 | 사업자등록번호: 000-00-00000 </p>
              <p>
                통신판매업 신고번호: xxxxxxxx
                <a
                  href="#"
                  className="ml-1 text-black underline hover:font-bold"
                >
                  사업자 정보확인
                </a>
              </p>
              <p>개인정보보호 책임자: 박상언 | 주소: 부산 해운대구 우동</p>
              <p>호스팅서비스 사업자 : ㈜스파로스닷컴</p>
            </address>
          </div>
          <div className="mt-6 text-[10px]">
            <p>
              OO은행 채무지급보증 안내
              <a href="#" className="ml-1 text-black underline hover:font-bold">
                서비스가입사실 확인
              </a>
            </p>
            <p>
              당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급 보증
              계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </div>
          <div className="mt-6 flex flex-row gap-1 text-[10px]">
            <a href="#" className="hover:underline mr-1">
              회사소개
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              이용약관
            </a>
            <span>|</span>
            <a href="#" className="text-red-500 hover:underline">
              개인정보처리방침
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              청소년보호방침
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              소비자분쟁해결기준
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              입점상담
            </a>
          </div>
          <div className="mt-3 text-[9px]">
            <p>
              ㈜스파로스닷컴 SPHAROS.COM 실시간 항공권 서비스의
              통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품
              정보 및 거래에 대해 책임을 지지 않습니다.
            </p>
            <p>
              ㈜스파로스닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한
              무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업
              진흥법 등에 의하여 엄격히 금지됩니다.
            </p>
            <p className="mt-1">© SPHAROS.COM Corp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
