"use client";
import React, { useState } from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Input,
  Button,
} from "@material-tailwind/react";
import { cities } from "@/utils/cities";
import { brands } from "@/utils/brands";
import { client } from "@/utils/sanityClient";
import { slugToOriginal } from "@/utils/slugOriginal";

const data = [
  {
    label: "Used Car",
    value: "used",
  },

  {
    label: "New Car",
    value: "new",
  },
];

function CarLoan() {
  const [activeTab, setActiveTab] = useState("used");

  const [City, setCity] = useState("");

  const [formDataEnquiry, setFormDataEnquiry] = useState({
    names: "",
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
    _type: "loan",
    name: `${formDataEnquiry?.names} - ${new Date()} `,
    mobileNo: formDataEnquiry?.mobileNo,
    city: slugToOriginal(City),
  };

  const handleSubmit = (e) => {
    console.log(newEnquiry);
    client
      .create(newEnquiry)
      .then((response) => {
        if (response?._createdAt) {
          alert("Thank You . We Will Call You Back.");
        }
      })
      .catch((error) => {
        console.error("Failed to create new contact:", error.message);
      });
  };
  return (
    <div className="mx-auto p-4 md:w-10/12">
      <h1>Looking For Car Loan</h1>
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
          <TabPanel value="used">
            <section className="px-8">
              <div>
                <h2>City*</h2>
                <select
                  id="countries"
                  class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option selected> Select City</option>
                  {cities?.map((city) => {
                    return (
                      <>
                        <option value={city?.slug}>{city?.label}</option>
                      </>
                    );
                  })}
                </select>

                <h2>Full Name*</h2>
                <Input
                  label="Full name as per PAN CARD"
                  className="mt-1"
                  id="name"
                  name="names"
                  value={formDataEnquiry.names}
                  onChange={handleChange}
                />
                <h2>Enter Mobile No*</h2>
                <Input
                  label="Enter Mobile No +91"
                  className="mt-1"
                  id="mobileNo"
                  name="mobileNo"
                  value={formDataEnquiry.mobileNo}
                  onChange={handleChange}
                />
                <Button
                  className="bg-red-900 mt-4"
                  size="md"
                  onClick={handleSubmit}
                >
                  Get Loan Starting @11.99%* Rate
                </Button>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="new">
            <section className="px-8">
              <div>
                <h2>Select Brand*</h2>
                <select
                  id="countries"
                  class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                  // onChange={(e) => cityChange(e)}
                >
                  <option selected> Select City</option>
                  {brands?.map((brand) => {
                    return (
                      <>
                        <option value={brand?.slug}>{brand?.label}</option>
                      </>
                    );
                  })}
                </select>
                <h2>City*</h2>
                <select
                  id="countries"
                  class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                  // onChange={(e) => cityChange(e)}
                >
                  <option selected> Select City</option>
                  {cities?.map((city) => {
                    return (
                      <>
                        <option value={city?.slug}>{city?.label}</option>
                      </>
                    );
                  })}
                </select>

                <h2>Full Name*</h2>
                <Input label="Full name as per PAN CARD" className="mt-1" />
                <h2>Enter Mobile No*</h2>
                <Input label="Enter Mobile No +91" className="mt-1" />
                <Button className="bg-red-900 mt-4" size="lg">
                  Get Started Now
                </Button>
              </div>
            </section>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default CarLoan;
