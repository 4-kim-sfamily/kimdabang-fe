export default function CompanyInfoSection() {
  return (
    <div className="px-5 text-[10px]">
      <div className="text-[11px] mt-2">
        <p>㈜스파로스</p>
        <address className="text-[#888888] not-italic">
          <p>대표자: 김남우 | 사업자등록번호: 000-00-00000 </p>
          <p>
            통신판매업 신고번호: xxxxxxxx
            <a href="#" className="ml-1 text-black underline hover:font-bold">
              사업자 정보확인
            </a>
          </p>
          <p>개인정보보호 책임자: 박상언 | 주소: 부산 해운대구 우동</p>
          <p>호스팅서비스 사업자 : ㈜스파로스닷컴</p>
        </address>
      </div>
    </div>
  );
}
