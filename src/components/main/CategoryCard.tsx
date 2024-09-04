import Image from "next/image";

export default function CategoryCard({
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
}) {
  return (
    <div>
      <div>
        <Image
          src={imgUrl}
          alt={name}
          width={300}
          height={300}
          style={{ width: "100%", height: "100%" }}
          objectFit="contain"
        />
      </div>
      <p className="text-xs text-[#666666] text-center w-[100%]">{name}</p>
    </div>
  );
}
