import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.APP_URL}/tradelist`;

export async function GET(
  request: Request,
  { params }: { params: { code: number } }
) {
  const res = await fetch(`${DATA_SOURCE_URL}/${params.code}`);

  const trades: Trade = await res.json();

  return NextResponse.json(trades);
}
