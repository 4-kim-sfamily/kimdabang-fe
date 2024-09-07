import Image from "next/image";
import Link from "next/link";

interface PhotoMediaReviewType {
  productCode: number;
  imgUrl: string;
}

export default async function PhotoMediaReview({
  productCode,
}: {
  productCode: string;
}) {
  const response = await fetch(
    `${process.env.JSONSERVER_URL}/ReviewimgUrl?productCode=${productCode}&_limit=7`,
    {
      cache: "force-cache",
    },
  );
  const imgList: PhotoMediaReviewType[] = await response.json();
  return (
    <div>
      <header className="px-2 flex justify-between items-center">
        <h3 className="font-extrabold">포토&동영상 리뷰</h3>
        <Link
          href={`/product/${productCode}/detailImage`}
          className="text-gray-400 text-sm"
        >
          더보기
        </Link>
      </header>
      <ul className="flex overflow-x-auto w-full px-4 whitespace-nowrap gap-2 py-3 mb-2 scroll-smooth">
        {imgList.map((img) => (
          <li
            key={img.imgUrl}
            className="w-[25%] flex-shrink-0 aspect-square relative"
          >
            <Image
              src={img.imgUrl}
              alt={`Review for ${productCode}`}
              fill
              className="object-cover rounded-lg"
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
