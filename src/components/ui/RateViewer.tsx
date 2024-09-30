"use client";
import { useEffect, useState } from "react";

export default function RateViewer({
  rateData,
  isVisible = true,
  noAnimation = false,
  color,
  size,
}: {
  rateData: number;
  isVisible?: boolean;
  noAnimation?: boolean;
  color?: string;
  size?: string;
}) {
  const [ratingPercentage, setRatingPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const targetPercentage = Math.min(Math.max(rateData, 0), 5) * 20;
      setTimeout(() => {
        setRatingPercentage(targetPercentage);
      }, 30); // Delay for smoother transition
    }
  }, [isVisible, rateData]);
  return (
    <div
      className={`
      relative inline-block  
      w-fit
    `}
      style={{
        fontSize: size || "1.4rem",
      }}
    >
      <div className="star-rating__background">★★★★★</div>
      <div
        className={`
          star-rating__foreground
          `}
        style={{
          width: `
          ${ratingPercentage}%
          `,
          color: color || "#ff5452",
          transition: `${noAnimation ? "none" : "width 1.5s ease-in-out"}`,
        }}
      >
        ★★★★★
      </div>
    </div>
  );
}
