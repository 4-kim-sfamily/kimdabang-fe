import Image from "next/image";

interface ProductImageProps {
  imgUrl: string;
  productName: string;
}

export default function ProductImage({
  imgUrl,
  productName,
}: ProductImageProps) {
  return (
    <div className="flex justify-center mb-4">
      <Image src={imgUrl} alt={productName} width={400} height={400} />
    </div>
  );
}
