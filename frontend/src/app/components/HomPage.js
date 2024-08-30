"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { brands } from "@/utils/brands";
import { cities } from "@/utils/cities";

function HomPage() {
  const [activeTab, setActiveTab] = React.useState("new");
  const data = [
    {
      label: "NEW CARS",
      value: "new",
    },
    {
      label: "USED CARS",
      value: "used",
    },
  ];
  return (
    <Tabs value={activeTab} className="max-w-[40rem] ">
      <TabsHeader
        className="bg-transparent "
        indicatorProps={{
          className: "bg-gray-50  ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : "text-gray-50"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        className="bg-gray-50 "
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        <TabPanel value="new">
          <div className="flex justify-items-center justify-between gap-4 ">
            <div class="block w-full">
              <select
                id="countries"
                class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
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
            </div>
            <div class="block w-full">
              <Button size="lg" className="w-full bg-red-800">
                New CARS
              </Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="used">
          <div className="flex justify-items-center justify-between gap-4 ">
            <div class="block w-full">
              <select
                id="brand"
                class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
              >
                <option selected> Select Brand</option>
                {brands?.map((brand) => {
                  return (
                    <>
                      <option value={brand?.slug}>{brand?.label}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div class="block w-full">
              <select
                id="model"
                class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
              >
                <option selected> Select Model</option>
                <option value="US">New Delhi</option>
                <option value="CA">Mumbai</option>
                <option value="FR">Chennai</option>
                <option value="DE">Banglore</option>
              </select>
            </div>
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default HomPage;
