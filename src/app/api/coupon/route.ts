"use server";
import { getMyCoupon } from "@/actions/mypage/coupon/coupon";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productCode: string } },
) {
  const data = await getMyCoupon();
  return NextResponse.json({ data: data });
}
