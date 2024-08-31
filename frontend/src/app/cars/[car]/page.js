import { client } from "@/utils/sanityClient";
import CarInfo from "./CarInfo";

async function carDetails(param) {
  return client.fetch(`*[_type == "car" && slug.current == '${param}'][0]{
    name,
    slug,
    brand []  -> {
    _id,
    name
    },
    fuel []  -> {
    _id,
    name
    },
    city []  -> {
    _id,
    name
    },
    body []  -> {
    _id,
    name
    },
    transmission []  -> {
    _id,
    name
    },
    feature,
    image,
    description,
    price,
    mileage,
    color,
    year,
    color,
    seating,
    size,
    engine,
    ratings,
    variants []  -> {
    _id,
    name
    },
    publishedAt}`);
}

async function page({ params }) {
  const car = await carDetails(params?.car);

  return (
    <>
      <CarInfo car={car} />
    </>
  );
}

export default page;
