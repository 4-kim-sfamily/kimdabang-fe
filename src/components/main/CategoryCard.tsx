import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
}) {
  return (
    <Link href={"/"}>
      <Image src={imgUrl} alt={name} width={300} height={300} priority />
      <p className="text-xs text-[#666666] text-center w-[100%]">{name}</p>
    </Link>
  );
}
