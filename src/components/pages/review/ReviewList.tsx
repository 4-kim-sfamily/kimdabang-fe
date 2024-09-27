import { Review } from "@/types/ResponseType";
import Link from "next/link";
import ReviewMedia from "./ReviewMedia";
import ReviewStarRating from "./ReviewStartRating";

export default function ReviewList({ reviews = [] }: { reviews: Review[] }) {
  return (
    <section className="w-full">
      {reviews?.map((review, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <Link
            href={`detail?reviewCode=${review.reviewCode}`}
            className="flex flex-col w-full p-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-xs text-gray-700">
                <ReviewStarRating rating={review.rating} />
              </div>
            </div>
            <ReviewMedia reviewCode={review.reviewCode} />
            <p className="text-sm">{review.text}</p>
            <p className="text-xs text-gray-400 my-2">{review.creationDate}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}
