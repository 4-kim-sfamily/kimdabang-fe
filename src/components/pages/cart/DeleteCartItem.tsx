"use client";

export default function DeleteCartItem({
  children,
  apiUri,
  selectedProductCodes,
}: {
  apiUri: string;
  children: React.ReactNode;
  selectedProductCodes?: string;
}) {
  const handleDeleteButton = () => {
    console.log(apiUri, "삭제");
  };
  return (
    <button
      onClick={() => handleDeleteButton}
      className="flex flex-col justify-start"
    >
      {children}
    </button>
  );
}
