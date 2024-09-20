import { getServerSession } from "next-auth";
import CompanyInfoSection from "../footer/CompanyInfoSection";
import CopyRightSection from "../footer/CopyRightSection";
import CustomerServiceSection from "../footer/CustomerServiceSection";
import FooterLinks from "../footer/FooterLinks";
import FooterNavigation from "../footer/FooterNavigation";
import GuaranteeInfoSection from "../footer/GuaranteeInfoSection";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Footer() {
  const session = await getServerSession(options);
  console.log("session server footer", session);
  return (
    <footer className="bg-gray-100 text-gray-600 pb-20 font-NanumSquare">
      <div className="text-[12px] font-bold">
        <CustomerServiceSection />
        <FooterNavigation />
        <CompanyInfoSection />
        <GuaranteeInfoSection />
        <FooterLinks />
        <CopyRightSection />
      </div>
    </footer>
  );
}
