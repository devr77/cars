var origin;

let htmlString = "25671314";

let status = 200;
export async function GET(req, { params }) {
  let url = new URL(req.url);
  origin = url.origin;

  return new Response(htmlString, {
    status: status,
    statusText: "200",
    headers: { "Content-Type": "text/html" },
  });
}
