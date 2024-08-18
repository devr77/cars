"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function HomPage() {
  const data = [
    {
      label: "NEW CARS",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "USED CARS",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <Tabs value="html" className="max-w-[40rem] ">
      <TabsHeader
        className="bg-transparent text-red-50 "
        indicatorProps={{
          className: "bg-red-500   p-5 ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-slate-50">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-red-500 ">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default HomPage;
