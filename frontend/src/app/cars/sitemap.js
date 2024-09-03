import { client } from "@/utils/sanityClient";

export default async function sitemap() {
  const Cars = await client.fetch(`*[_type == "car"]{
    slug
    }`);

  const CarsUrl = Cars?.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}cars/${blog?.slug?.current}`,
    changeFreq: "monthly",
    priority: 0.6,
  }));

  return [...CarsUrl];
}
