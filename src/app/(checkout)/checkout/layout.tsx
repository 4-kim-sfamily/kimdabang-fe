import BackwardButton from "@/components/ui/BackwardButton";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { ReactNode } from "react";

interface LayoutProps {
  modal: ReactNode;
  children: ReactNode;
}

function layout({ modal, children }: LayoutProps) {
  return (
    <CheckoutProvider>
      <div className="fixed top-0 left-0 bg-[white] w-full z-10 h-[56px] flex items-center">
        <div className="absolute left-3 top-[25%]">
          <BackwardButton />
        </div>
        <p className="ml-[50%] translate-x-[-50%] font-extrabold">결제하기</p>
      </div>
      {modal}
      {children}
    </CheckoutProvider>
  );
}

export default layout;
