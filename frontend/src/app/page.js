import HomPage from "./components/HomPage";

import CarCategory from "./components/CarCategory";
import CarCompanyCategory from "./components/CarCompanyCategory";
import { CarsTabs } from "./components/CarsTabs";

import NewCars from "./components/NewCars";
import TestiMonial from "./components/TestiMonial";
import { client } from "@/utils/sanityClient";
import { imageUrl } from "@/utils/imageUrl";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "carStore7x24",
  url: "https://www.carsstore7x24.in/",
};

export default async function page() {
  const Post = await client.fetch(`*[_type == "car"]{
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
      image ,
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
      type,
      variants []  -> {
      _id,
      name
      },
      publishedAt}`);

  const Poster = await client.fetch(`*[_type == "gallery"]`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl(
            Poster[0]?.poster?.asset?._ref
          ).url()})`,
        }}
      >
        <div className="absolute w-full md:w-3/4 lg:w-1/2 mx-auto bottom-2  p-2  left-1/2 transform -translate-x-1/2 ">
          <HomPage />
        </div>
      </div> */}

      <div className="h-4/5 mt-36 bg-gray-200">
        <div className=" mx-auto p-4   md:w-10/12">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-red-700 text-base sm:text-lg md:text-xl lg:text-2xl">
              POPULAR NEW CARS
            </h2>
            <div className="font-medium text-sm sm:text-base md:text-lg underline">
              VIEW ALL &rarr;
            </div>
          </div>

          <CarsTabs TotalCars={Post} />
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

          <CarCategory TotalCars={Post} />
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

export async function generateMetadata() {
  return {
    title: "Buy New Cars and Used Cars | CarsStore7x24",
    description:
      "Find great deals on used and new cars. Explore car loan options to make your purchase easy and affordable",
    keywords: ["Car", "New Car", "Used Car", "Car Loan"],
    publisher: "CarsStore7x24",
    metadataBase: new URL("https://www.carsstore7x24.in/"),
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      cache: true,
    },
  };
}
