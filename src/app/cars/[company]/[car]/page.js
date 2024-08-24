"use client";
import React from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "INFORMATION",
    value: "info",
  },
  {
    label: "VARIANTS",
    value: "variants",
  },
  {
    label: "IMAGES",
    value: "images",
  },
  {
    label: "MILEAGE",
    value: "mileage",
  },
  {
    label: "EMI",
    value: "emi",
  },
  {
    label: "OFFER",
    value: "offer",
  },

  {
    label: "MORE",
    value: "more",
  },
];

function page() {
  const [activeTab, setActiveTab] = React.useState("info");
  return (
    <div className="mx-auto p-4 md:w-10/12">
      <h2>Home / Citroen Cars / Basalt</h2>

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
                    alt="ecommerce"
                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="https://dummyimage.com/400x400"
                  />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">
                      BRAND NAME
                    </h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                      The Catcher in the Rye
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
                    <p class="leading-relaxed">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam indxgo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean shorts
                      keytar banjo tattooed umami cardigan.
                    </p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div class="flex">
                        <span class="mr-3">Color</span>
                        <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      </div>
                      <div class="flex ml-6 items-center">
                        <span class="mr-3">Size</span>
                        <div class="relative">
                          <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                          <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex">
                      <span class="title-font font-medium text-2xl text-gray-900">
                        $58.00
                      </span>
                      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                        Button
                      </button>
                      <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="dark:bg-gray-100 dark:text-gray-800">
              <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 mb-8 dark:text-gray-600">
                  Sagittis tempor donec id vestibulum viverra. Neque condimentum
                  primis orci at lacus amet bibendum.
                </p>
                <div className="space-y-4">
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      Ex orci laoreet egestas sapien magna egestas scelerisque?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Lectus iaculis orci metus vitae ligula dictum per. Nisl
                      per nullam taciti at adipiscing est.{" "}
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      Lorem at arcu rutrum viverra metus sapien venenatis
                      lobortis odio?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Tincidunt ut hac condimentum rhoncus phasellus nostra.
                      Magna porttitor egestas tincidunt neque vehicula potenti.{" "}
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                      Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                      suscipit erat?
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                      Justo libero tellus integer tincidunt justo semper
                      consequat venenatis aliquet imperdiet. Ultricies urna
                      proin fusce nulla pretium sodales vel magna et massa
                      euismod vulputate sed.{" "}
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="variants">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
                  </h1>
                  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug.
                  </p>
                  <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Neptune
                      </h2>
                      <p class="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="images">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-2/3 mx-auto">
                  <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                    <img
                      alt="gallery"
                      class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                      src="https://dummyimage.com/820x340"
                    />
                    <div class="text-center relative z-10 w-full">
                      <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed">
                        Skateboard +1 mustache fixie paleo lumbersexual.
                      </p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2">
                    <div class="px-2 w-1/2">
                      <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img
                          alt="gallery"
                          class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                          src="https://dummyimage.com/542x460"
                        />
                        <div class="text-center relative z-10 w-full">
                          <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                            Shooting Stars
                          </h2>
                          <p class="leading-relaxed">
                            Skateboard +1 mustache fixie paleo lumbersexual.
                          </p>
                          <a class="mt-3 text-indigo-500 inline-flex items-center">
                            Learn More
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="px-2 w-1/2">
                      <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img
                          alt="gallery"
                          class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                          src="https://dummyimage.com/542x420"
                        />
                        <div class="text-center relative z-10 w-full">
                          <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                            Shooting Stars
                          </h2>
                          <p class="leading-relaxed">
                            Skateboard +1 mustache fixie paleo lumbersexual.
                          </p>
                          <a class="mt-3 text-indigo-500 inline-flex items-center">
                            Learn More
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="mileage">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Master Cleanse Reliac Heirloom
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid celiac
                    humblebrag.
                  </p>
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
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        2.7K
                      </h2>
                      <p class="leading-relaxed">Downloads</p>
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
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        1.3K
                      </h2>
                      <p class="leading-relaxed">Users</p>
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
                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        74
                      </h2>
                      <p class="leading-relaxed">Files</p>
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-gray-900">
                        46
                      </h2>
                      <p class="leading-relaxed">Places</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="emi">
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                    Pricing
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Banh mi cornhole echo park skateboard authentic crucifix
                    neutra tilde lyft biodiesel artisan direct trade mumblecore
                    3 wolf moon twee
                  </p>
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                  <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Plan
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Speed
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Storage
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Price
                        </th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-4 py-3">Start</td>
                        <td class="px-4 py-3">5 Mb/s</td>
                        <td class="px-4 py-3">15 GB</td>
                        <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                        <td class="w-10 text-center">
                          <input name="plan" type="radio" />
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          Pro
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          25 Mb/s
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          25 GB
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                          $24
                        </td>
                        <td class="border-t-2 border-gray-200 w-10 text-center">
                          <input name="plan" type="radio" />
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          Business
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          36 Mb/s
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3">
                          40 GB
                        </td>
                        <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                          $50
                        </td>
                        <td class="border-t-2 border-gray-200 w-10 text-center">
                          <input name="plan" type="radio" />
                        </td>
                      </tr>
                      <tr>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                          Exclusive
                        </td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                          48 Mb/s
                        </td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                          120 GB
                        </td>
                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                          $72
                        </td>
                        <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                          <input name="plan" type="radio" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel value="offer">
            <h2>OFFER</h2>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default page;
