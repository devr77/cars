import { revalidatePath, revalidateTag } from "next/cache";

const secret = process.env.SANITY_WEBHOOK;

export async function POST(request) {
  try {
    const text = await request.text();
    revalidatePath("/");
    revalidatePath("/cars");
    revalidatePath(`/cars/${text?.slug}`);
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
