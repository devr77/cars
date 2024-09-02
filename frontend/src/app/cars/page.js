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
