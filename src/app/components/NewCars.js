"use client";

import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
} from "@material-tailwind/react";

const data = [
  {
    label: "PRICE RANGE",
    value: "price",
  },
  {
    label: "FUEL TYPE",
    value: "fuel",
  },
  {
    label: "BODY TYPE",
    value: "body",
  },
];

function NewCars() {
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
          {data.map((label, value) => (
            <Tab
              key={value}
              value={label?.value}
              onClick={() => setActiveTab(label?.value)}
              className={activeTab === label?.value ? "text-gray-900" : ""}
            >
              {label?.label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          style={{
            cursor: "pointer",
            overflow: "auto",
          }}
        >
          <TabPanel value="price">
            <div className="flex  flex-wrap  gap-2">
              <Chip variant="outlined" value="0-3 LAKH" size="lg" />
              <Chip variant="outlined" value="3-6 LAKH" />
              <Chip variant="outlined" value="6-10 LAKH" />
              <Chip variant="outlined" value="10-15 LAKH" />
              <Chip variant="outlined" value="20-30 LAKH" />
              <Chip variant="outlined" value="30-50 LAKH" />
              <Chip variant="outlined" value="1 CRORE" />
            </div>
          </TabPanel>
          <TabPanel value="fuel">
            <div className="flex  flex-wrap gap-2">
              <Chip variant="outlined" value="PETROL" size="lg" />
              <Chip variant="outlined" value="DIESEL" />
              <Chip variant="outlined" value="CNG" />
              <Chip variant="outlined" value="ELECTRIC" />
            </div>
          </TabPanel>
          <TabPanel value="body"></TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default NewCars;
