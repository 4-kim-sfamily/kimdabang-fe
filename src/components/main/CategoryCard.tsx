import Image from "next/image";

export default function CategoryCard({
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
}) {
  return (
    <ul>
      <li className="w-full h-full object-cover overflow-hidden">
        <Image
          src={imgUrl}
          alt={name}
          width={300}
          height={300}
          priority
        />
        <p className="text-xs text-[#666666] text-center w-[100%]">{name}</p>
      </li>
    </ul>
  );
}
