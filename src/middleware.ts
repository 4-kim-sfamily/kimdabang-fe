export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/mypage/:path*", "/like/:path*", "/cart"], // 모든 하위 경로 포함
};
