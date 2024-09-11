"use client";

export default function DeleteCartItem({
  selectedProductCodes,
  children,
}: {
  selectedProductCodes: string[] | string;
  children: React.ReactNode;
}) {
  const handleDeleteButton = () => {
    const productCodesArray = Array.isArray(selectedProductCodes)
      ? selectedProductCodes
      : [selectedProductCodes];
    location.reload();
    //아이템 삭제
    console.log(productCodesArray, "삭제");
  };
  return (
    <button
      onClick={handleDeleteButton}
      className="flex flex-col justify-start"
    >
      {children}
    </button>
  );
}
