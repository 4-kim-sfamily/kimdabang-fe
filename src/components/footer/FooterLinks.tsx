export default function FooterLinks() {
  return (
    <div className="mt-6 flex flex-wrap gap-1 text-[10px] justify-center md:justify-center">
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
  );
}
