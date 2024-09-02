"use client";
import { imageUrl } from "@/utils/imageUrl";
import React from "react";

function Cars({ TotalCars }) {
  return (
    <div className="mx-auto p-4 md:w-10/12 border-2 border-gray-200 ">
      {TotalCars.length === 0 && <h1>Coming Soon To Your City..........</h1>}
      {TotalCars?.map((car) => {
        return (
          <a href={`/cars/${car?.slug.current}`}>
            <div class="flex flex-col md:flex-row border-2 border-gray-300 mb-1">
              <div class="flex-1 p-4 h-[250px]">
                <img
                  src={imageUrl(car?.image[0]?.asset?._ref).url()}
                  alt="Centered Image"
                  class="max-h-full w-3/4"
                />
              </div>
              <div class="flex-1 p-4 h-[250px] text-center">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {car?.brand[0]?.name} {car?.name}
                </h1>
                <h1 class=" text-xl title-font font-medium mb-1">
                  Rs. {car?.price}
                </h1>
                <h1 class=" text-xl title-font font-medium mb-1">
                  {car?.ratings} Star Rating
                </h1>
                <h1 class=" text-xl title-font font-medium mb-1">
                  Engine -- {car?.engine}
                </h1>
                <h1 class=" text-xl title-font font-medium mb-1">
                  Mileage -- {car?.mileage}
                </h1>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Cars;
