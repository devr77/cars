import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  const cars = await prisma.Post.findMany();

  return NextResponse.json({ cars }, { status: 200 });
}
