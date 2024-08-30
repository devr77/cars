import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const secret = process.env.SANITY_WEBHOOK;

export async function POST(request) {
  try {
    const text = await request.text();

    console.log(text);
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
