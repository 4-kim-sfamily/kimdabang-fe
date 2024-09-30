import NotFound from "@/components/pages/notfound/NotFound";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "페이지를 찾을 수 없습니다.",
};

export default function notFound() {
  return <NotFound />;
}
