"use client";
import { useEffect } from "react";

export default function PeriodModal({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 비활성화
    } else {
      document.body.style.overflow = ""; // 모달이 닫힐 때 스크롤 활성화
    }

    return () => {
      document.body.style.overflow = ""; // 컴포넌트가 언마운트 될 때 원래 상태로 복구
    };
  }, [isOpen]);

  if (!isOpen) return null; // 모달이 열려있지 않으면 렌더링하지 않음

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
      {children}
    </div>
  );
}
