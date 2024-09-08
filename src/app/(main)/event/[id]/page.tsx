import React from "react";

export default function page({ params }: { params: { eventId: string } }) {
  console.log(decodeURIComponent(params.eventId));

  return <div>{decodeURIComponent(params.eventId)}</div>;
}
