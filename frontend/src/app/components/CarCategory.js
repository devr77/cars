"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", margin: "3px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", margin: "3px" }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const data = [
  {
    label: "By Price",
    value: "price",
  },
  {
    label: "By Model",
    value: "model",
  },
  {
    label: "By City",
    value: "city",
  },
];

function CarCategory({ TotalCars }) {
  const [activeTab, setActiveTab] = React.useState("price");
  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-red-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel value="price">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card
                  key={index}
                  className=" mt-10 w-20"
                  onClick={() => alert(car?.slug)}
                >
                  <CardHeader color="blue-gray" className=" h-30">
                    <img src={car?.image} alt="card-image" />
                  </CardHeader>
                  <CardBody>
                    <Typography>
                      {car?.make}
                      {car?.model}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      ${car?.price}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel value="model">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card className="mt-10 w-20">
                  <CardHeader color="blue-gray" className="relative h-40">
                    <img
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography>
                      {car?.make}
                      {car?.model}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      ${car?.price}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel value="city">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card className="mt-10 w-20">
                  <CardHeader color="blue-gray" className="relative h-40">
                    <img
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography>
                      {car?.make}
                      {car?.model}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      ${car?.price}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default CarCategory;
