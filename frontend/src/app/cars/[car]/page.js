import { client } from "@/utils/sanityClient";
import CarInfo from "./CarInfo";
import { slugToOriginal } from "@/utils/slugOriginal";

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

export async function generateMetadata({ params }) {
  return {
    title: ` ${slugToOriginal(params?.car)} | CarsStore7x24`,
    description: `Find great deals on used and new cars. ${params?.car} Explore car loan options to make your purchase easy and affordable`,
    keywords: ["Car", "New Car", "Used Car", "Car Loan"],
    publisher: "CarsStore7x24",
    metadataBase: new URL("https://www.carsstore7x24.in/"),
    alternates: {
      canonical: `/cars/${params?.car}`,
    },
    robots: {
      index: true,
      follow: true,
      cache: true,
    },
  };
}
