import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import MyPageCoupon from "./MyPageCoupon";
import MyStarAmount from "./MyStarAmount";

interface StarDataResponseType {
  status: string;
  message: string;
  data: {
    starAmount: number;
    greenStarAmount: number;
  };
}

interface CouponResponse {
  couponAmount: number;
}

export default async function CouponStarGroup() {
  const session = await getServerSession(options);

  // 쿠폰 데이터 요청
  const couponRes = await fetch(`${process.env.JSONSERVER_URL}/couponAmount`, {
    cache: "no-store",
  });
  const couponData: CouponResponse = await couponRes.json();

  // starData 초기값 null
  let starData: StarDataResponseType | null = null;

  // 사용자가 로그인한 경우에만 starData 요청
  if (session?.user?.accessToken) {
    const starRes = await fetch(
      `${process.env.BACKEND_URL}/api/v1/userstar/get-userstaramount?start=0000-01-01&end=2025-10-01`,
      {
        method: "GET",
        headers: {
          Authorization: `${session.user.accessToken}`, // accessToken을 헤더에 추가
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );
    if (starRes.ok) {
      starData = await starRes.json();
    } else {
      console.error("starData 받기 에러");
    }
  }

  return (
    <section className="flex">
      <MyPageCoupon couponAmount={couponData.couponAmount} />
      {/* starData가 존재할 때만 MyStarAmount 컴포넌트 렌더링 */}
      <MyStarAmount
        starType="regular"
        starAmount={starData ? starData.data.starAmount : 0}
      />
      <MyStarAmount
        starType="echo"
        starAmount={starData ? starData.data.greenStarAmount : 0}
      />
    </section>
  );
}
