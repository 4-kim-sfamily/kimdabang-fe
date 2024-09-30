import { getIsFavorite } from "@/actions/favorite/getIsFavorite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productCode: string } },
) {
  const isFavorite = await getIsFavorite(params.productCode);
  return NextResponse.json({ favorite: isFavorite });
}
