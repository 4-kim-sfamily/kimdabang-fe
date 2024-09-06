import Image from "next/image";

interface ProductImageProps {
  productImageUrl: string;
  productName: string;
}

export default function ProductImage({
  productImageUrl,
  productName,
}: ProductImageProps) {
  return (
    <div className="relative w-[100%] aspect-square mb-4">
      {/* 부모 요소에 크기를 설정 */}
      <Image
        src={productImageUrl}
        alt={productName}
        layout="fill" // 이미지를 부모 요소에 꽉 채움
        objectFit="contain" // 이미지를 부모 요소에 맞게 자르거나 확장
      />
    </div>
  );
}
