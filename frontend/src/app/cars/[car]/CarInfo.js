"use client";
import React, { useState } from "react";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  List,
  ListItem,
} from "@material-tailwind/react";
import { imageUrl } from "@/utils/imageUrl";
import { client } from "@/utils/sanityClient";

const data = [
  {
    label: "INFORMATION",
    value: "info",
  },

  {
    label: "IMAGES",
    value: "images",
  },
  {
    label: "FEATURES",
    value: "features",
  },
  {
    label: "VARIANTS",
    value: "variants",
  },
];

function CarInfo({ car }) {
  const [activeTab, setActiveTab] = useState("info");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [openReview, setOpenReview] = useState(false);
  const handleOpenReview = () => setOpenReview((cur) => !cur);

  const [formDataEnquiry, setFormDataEnquiry] = useState({
    name: "",
    mobileNo: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataEnquiry((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const newEnquiry = {
    _type: "enquiry",
    name: `${formDataEnquiry?.name} - ${new Date()} `,
    mobileNo: formDataEnquiry?.mobileNo,
    email: formDataEnquiry?.emailId,
    car: car?.name,
  };

  const handleSubmit = (e) => {
    client
      .create(newEnquiry)
      .then((response) => {
        if (response?._createdAt) {
          handleOpen();
          alert("Thank You . We Will Call You Back.");
        }
      })
      .catch((error) => {
        console.error("Failed to create new contact:", error.message);
      });
  };

  const [formDataReview, setFormDataReview] = useState({
    names: "",
    mobileNo: "",
    review: "",
  });

  const handleChangeReview = (e) => {
    const { name, value } = e.target;
    setFormDataReview((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const newReview = {
    _type: "review",
    name: `${formDataReview?.names} - ${new Date()} `,
    mobileNo: formDataReview?.mobileNo,
    review: formDataReview?.review,
    car: car?.name,
  };

  const handleSubmitReview = (e) => {
    client
      .create(newReview)
      .then((response) => {
        if (response?._createdAt) {
          handleOpenReview();
          alert("Thank You . We Will Call You Back.");
        }
      })
      .catch((error) => {
        console.error("Failed to create new contact:", error.message);
      });
  };

  return (
    <div className="mx-auto p-4 md:w-10/12">
      <Tabs value={activeTab} className=" mt-4">
        <TabsHeader
          className="rounded-none border-b border-red-300 bg-transparent p-0 overflow-x-auto whitespace-nowrap"
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
              className={
                activeTab === value ? "text-gray-900" : "text-gray-500"
              }
              style={{
                cursor: "pointer",
              }}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="bg-gray-50"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel value="info">
            <section class="text-gray-600 body-font overflow-hidden">
              <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt="car-image"
                    class="lg:w-3/4 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={imageUrl(car?.image[0]?.asset?._ref)}
                  />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">
                      {car?.brand[0]?.name}
                    </h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                      {car?.name}
                    </h1>
                    <div class="flex mb-4">
                      <span class="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span class="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                      <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                    <p class="leading-relaxed">{car?.description}</p>

                    <span class="title-font font-medium text-2xl text-gray-900">
                      Rs. {car?.price}
                    </span>

                    <Button
                      size="lg"
                      onClick={handleOpen}
                      className="mx-1 my-1 text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded w-full"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <Button
              className="flex items-center gap-3 bg-blue-gray-400 mx-4"
              onClick={handleOpenReview}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Write Review
            </Button>
            <section className="dark:bg-gray-100 dark:text-gray-800">
              <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-xl font-bold sm:text-4xl">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      What is the price of {car?.brand[0]?.name} {car?.name} ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      The Price Range of {car?.brand[0]?.name} {car?.name}{" "}
                      varies from Rs. {car?.price}
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      Is {car?.brand[0]?.name} {car?.name} 5 Seater or 7 Seater
                      Car ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      {car?.brand[0]?.name} {car?.name} is {car?.seating}{" "}
                      Seating Capacity.
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      What is the Size of {car?.brand[0]?.name} {car?.name} ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      The Size of {car?.brand[0]?.name} {car?.name} is{" "}
                      {car?.size}
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      What is the Safety Rating of {car?.brand[0]?.name}{" "}
                      {car?.name} ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      The Safety Rating of {car?.brand[0]?.name} {car?.name} is{" "}
                      {car?.ratings} Star Rating.
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      What is the Engine Capacity of {car?.brand[0]?.name}{" "}
                      {car?.name} ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      The Engine Capacity of {car?.brand[0]?.name} {car?.name}{" "}
                      is {car?.engine}
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      What is the mileage of {car?.brand[0]?.name} {car?.name} ?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      The mileage of {car?.brand[0]?.name} {car?.name}{" "}
                      {car?.mileage}
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="variants">
            <h2>Coming Soon..</h2>
          </TabPanel>
          <TabPanel value="images">
            <div class="mx-auto w-full md:w-3/4 lg:w-3/4">
              {car?.image.map((label, value) => (
                <img
                  alt="gallery"
                  class="w-full object-cover h-1/2 object-center inset-0"
                  src={imageUrl(label?.asset?._ref).url()}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="features">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Special Features of Car
                  </h1>
                </div>

                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {car?.engine}
                      </h2>
                      <p class="leading-relaxed">Engine Capacity</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>

                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {car?.mileage}
                      </h2>
                      <p class="leading-relaxed">Mileage</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>

                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {car?.size}
                      </h2>
                      <p class="leading-relaxed">Size</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        {car?.ratings}
                      </h2>
                      <p class="leading-relaxed">Safety Rating</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col text-center w-full mt-4">
                  <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
                    Alternative Features of Car
                  </h1>
                </div>
                {car?.feature?.map((spec, i) => {
                  return (
                    <Card className="w-full md:w-3/4 lg:w-1/2 mx-auto mb-1 mt-1">
                      <List>
                        <ListItem>{spec}</ListItem>
                      </List>
                    </Card>
                  );
                })}
              </div>
            </section>
          </TabPanel>
        </TabsBody>
      </Tabs>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h5" color="blue-gray">
              Enter your Details to Book
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input
              label="Name"
              size="lg"
              type="text"
              id="name"
              name="name"
              value={formDataEnquiry.name}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Your Mobile No
            </Typography>
            <Input
              label="Mobile No"
              size="lg"
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formDataEnquiry.mobileNo}
              onChange={handleChange}
            />
            <Typography className="-mb-2" variant="h6">
              Your Email Id
            </Typography>
            <Input
              label="Email Id"
              size="lg"
              type="text"
              id="emailId"
              name="emailId"
              value={formDataEnquiry.mobileNo}
              onChange={handleChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              className="bg-red-600 hover:bg-red-700 "
              onClick={handleSubmit}
              fullWidth
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      <Dialog
        size="xs"
        open={openReview}
        handler={handleOpenReview}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h5" color="blue-gray">
              Write Review for Car
            </Typography>

            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input
              label="Name"
              size="lg"
              type="text"
              id="names"
              name="names"
              value={formDataReview.names}
              onChange={handleChangeReview}
            />
            <Typography className="-mb-2" variant="h6">
              Enter MobileNo or Email Id
            </Typography>
            <Input
              label="MobileNo or Email Id"
              size="lg"
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formDataReview.mobileNo}
              onChange={handleChangeReview}
            />

            <Typography className="-mb-2" variant="h6">
              Write Review
            </Typography>
            <textarea
              class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              id="review"
              name="review"
              value={formDataReview.review}
              onChange={handleChangeReview}
            ></textarea>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              className="bg-red-600 hover:bg-red-700 "
              onClick={handleSubmitReview}
              fullWidth
            >
              Submit Review
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

export default CarInfo;
