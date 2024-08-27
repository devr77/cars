import HomPage from "./components/HomPage";

import CarCategory from "./components/CarCategory";
import CarCompanyCategory from "./components/CarCompanyCategory";
import { CarsTabs } from "./components/CarsTabs";

import NewCars from "./components/NewCars";
import TestiMonial from "./components/TestiMonial";
import { client } from "@/utils/sanityClient";

import imageUrlBuilder from "@sanity/image-url";

async function Cars() {
  try {
    const res = await fetch("https://freetestapi.com/api/v1/cars?limit=5");
    if (!res.ok) {
      throw new Error("Error occurred when fetching posts");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
}
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder?.image(source);
}
export default async function page() {
  const TotalCars = await Cars();

  const post = await client.fetch(`*[_type == "car"]
    {
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
      publishedAt
    }`);
  console.log("Images", urlFor(post[0]?.image[0]?.asset?._ref).url());
  return (
    <>
      <div className="relative h-[500px] bg-cover bg-center bg-[url('https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/top-banner2.jpg')]">
        <div className="absolute w-full md:w-3/4 lg:w-1/2 mx-auto bottom-2  p-2  left-1/2 transform -translate-x-1/2 ">
          <HomPage />
        </div>
      </div>

      <div className="h-4/5 mt-36 bg-gray-200">
        <div className=" mx-auto p-4   md:w-10/12">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl">
              POPULAR NEW CARS
            </h2>
            <div className="font-medium text-sm sm:text-base md:text-lg underline">
              VIEW ALL &rarr;
            </div>
          </div>

          <CarsTabs TotalCars={TotalCars} />
        </div>
      </div>
      <div className="mt-36 ">
        <div className=" mx-auto   p-4 md:w-10/12">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl">
              POPULAR USED CARS
            </h2>
            <div className="font-medium text-sm sm:text-base md:text-lg underline">
              VIEW ALL &rarr;
            </div>
          </div>

          <CarCategory TotalCars={TotalCars} />
        </div>
      </div>

      <div className=" mt-18 ">
        <div className=" mx-auto   p-4 md:w-10/12">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl">
              SEARCH NEW CARS BY BRAND
            </h2>
            <div className="font-medium text-sm sm:text-base md:text-lg underline">
              VIEW ALL &rarr;
            </div>
          </div>
          <CarCompanyCategory />
        </div>
      </div>

      <div className=" mt-18 bg-gray-200">
        <div className=" mx-auto   p-4 w-10/12">
          <h2 className="font-bold text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl">
            FIND NEW CARS OF YOUR CHOICE
          </h2>
          <NewCars />
        </div>
      </div>

      <TestiMonial />
    </>
  );
}
