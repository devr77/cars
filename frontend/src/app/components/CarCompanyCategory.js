"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Brand = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Toyota",
  "BMW",
  "Kia",
  "Audi ",
  "Skoda",
];

function CarCompanyCategory() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Brand.map((label, index) => (
        <Card key={index} className=" mt-10 w-30">
          <CardHeader color="blue-gray" className="h-20">
            <img src="https://picsum.photos/200/300" alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {label}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default CarCompanyCategory;
