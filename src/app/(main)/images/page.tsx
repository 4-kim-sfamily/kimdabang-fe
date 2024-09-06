import Link from "next/link";

const images: string[] = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

export default function ImagesList() {
  return (
    <div>
      <h2>이미지 목록</h2>
      {images.map((image, index) => (
        <Link key={index} href={`/images/${index}?index=${index}`}>
          이미지 {index + 1}
        </Link>
      ))}
    </div>
  );
}
