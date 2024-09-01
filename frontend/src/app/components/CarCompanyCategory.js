"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { brands } from "@/utils/brands";

function CarCompanyCategory() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {brands.map((label, index) => (
        <Card key={index} className=" mt-10 w-30">
          <CardHeader color="blue-gray" className="h-35 object-contain">
            <img src={`/assets/${label?.slug}.jpg`} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {label?.label}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default CarCompanyCategory;
