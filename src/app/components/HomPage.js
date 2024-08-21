"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

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
          className: "bg-gray-50   p-5 ",
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
          <h1>New Cars</h1>
        </TabPanel>
        <TabPanel value="used">
          <h1>Used Cars</h1>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default HomPage;
