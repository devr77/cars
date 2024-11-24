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
import { imageUrl } from "@/utils/imageUrl";
import { useRouter } from "next/navigation";
import { trim } from "@/utils/trim";

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
    label: "Popular Cars",
    value: "popular",
  },
  {
    label: "Upcoming Cars",
    value: "upcoming",
  },
  {
    label: "Latest Launches",
    value: "latest",
  },
];

export function CarsTabs({ TotalCars }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("popular");

  // console.log("ImageUrl", imageUrl(TotalCars[0]?.image[0]?.asset?._ref)?.url());
  // console.log(
  //   "Custom",
  //   process.env.NEXT_PUBLIC_SANITY_URL +
  //     trim(TotalCars[0]?.image[0]?.asset?._ref)
  // );
  // console.log(TotalCars[0].image);
  // // console.log("TotalCars", TotalCars[0]?.image[0]?.asset?._ref);

  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-red-900 shadow-none rounded-none",
          }}
        >
          {data?.map(({ label, value }) => (
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
          <TabPanel value="popular">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card
                  key={index}
                  className=" mt-10 w-20"
                  onClick={() => router.push(`/cars/${car?.slug?.current}`)}
                >
                  <CardHeader color="blue-gray" className=" h-30">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_SANITY_URL +
                        (Array.isArray(car?.image) && car.image[0]?.asset?._ref
                          ? trim(car.image[0]?.asset?._ref)
                          : "")
                      }
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {car?.name}
                    </Typography>
                    <Typography>{car?.brand[0]?.name}</Typography>
                    <Typography>Rs. {car?.price}</Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel value="upcoming">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card key={index} className=" mt-10 w-20">
                  {/* <CardHeader color="blue-gray" className=" h-30">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_SANITY_URL +
                        trim(car?.image[0]?.asset?._ref)
                      }
                      alt="card-image"
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {car?.name}
                    </Typography>
                    <Typography>{car?.brand[0]?.name}</Typography>
                    <Typography>Rs. {car?.price}</Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
          <TabPanel value="latest">
            <Slider {...settings}>
              {TotalCars?.map((car, index) => (
                <Card key={index} className=" mt-10 w-20">
                  {/* <CardHeader color="blue-gray" className=" h-30">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_SANITY_URL +
                        trim(car?.image[0]?.asset?._ref)
                      }
                      alt="card-image"
                    />
                  </CardHeader> */}
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {car?.name}
                    </Typography>
                    <Typography>{car?.brand[0]?.name}</Typography>
                    <Typography>Rs. {car?.price}</Typography>
                  </CardBody>
                </Card>
              ))}
            </Slider>
          </TabPanel>
        </TabsBody>
      </Tabs>
      <Typography variant="h5" className="text-center mt-3" color="red">
        All Popular Cars in India
      </Typography>
    </>
  );
}
