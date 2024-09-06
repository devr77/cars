import { client } from "@/utils/sanityClient";
import Cars from "../components/Cars";
import { slugToOriginal } from "@/utils/slugOriginal";

async function CarsFetch(param) {
  return client.fetch(`*[_type == "car" ${param}] {
  name,
  slug,
  brand[]->{
    _id,
    name
  },
  fuel[]->{
    _id,
    name
  },
  city[]->{
    _id,
    name
  },
  body[]->{
    _id,
    name
  },
  transmission[]->{
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
  seating,
  size,
  engine,
  ratings,
  variants[]->{
    _id,
    name
  },
  publishedAt
}
`);
}

async function page({ params, searchParams }) {
  const { brand, type, price, city, fuel, body } = searchParams;

  let filterConditions = "";

  if (brand) {
    filterConditions += ` &&  "${slugToOriginal(brand)}" in brand[]->name`;
  }

  if (city) {
    filterConditions += ` &&  "${slugToOriginal(city)}" in  city[]->name`;
  }

  if (type) {
    filterConditions += ` && type == ${type}`;
  }
  if (price) {
    filterConditions += ` && price <= ${price}`;
  }

  console.log("Filters", filterConditions);
  const TotalCars = await CarsFetch(filterConditions);

  return (
    <>
      <Cars TotalCars={TotalCars} />
    </>
  );
}

export default page;

export async function generateMetadata() {
  return {
    title: "Top New Cars and Used Cars | CarsStore7x24",
    description:
      "Find great deals on used and new cars. Explore car loan options to make your purchase easy and affordable",
    keywords: ["Car", "New Car", "Used Car", "Car Loan"],
    publisher: "CarsStore7x24",
    metadataBase: new URL("https://www.carsstore7x24.in/"),
    alternates: {
      canonical: "/cars",
    },
    robots: {
      index: true,
      follow: true,
      cache: true,
    },
  };
}
