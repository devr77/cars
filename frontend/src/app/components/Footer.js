"use client";
import { client } from "@/utils/sanityClient";
import Image from "next/image";
import React, { useState } from "react";

function Footer() {
  const [MobileNo, setMobileNo] = useState("");

  const newContact = {
    _type: "contactUs", // Ensure this matches the schema type you created in Sanity
    name: `New  Enquiry - ${new Date()}`,
    mobileNo: MobileNo,
  };

  function submit() {
    client
      .create(newContact)
      .then((response) => {
        if (response?._createdAt) {
          alert("Thank You . We Will Call You Back.");
        }
      })
      .catch((error) => {
        console.error("Failed to create new contact:", error.message);
      });
  }

  function getMobileNo(e) {
    setMobileNo(e.target.value);
  }
  return (
    <footer className="bg-gray-100 text-gray-600 body-font mt-6">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Product
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">New Cars</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Used Cars</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Sell Cars</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="contact-us"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="terms-and-condition"
                >
                  Terms & Conditions
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Recent Cars</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Gallery</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Need Help ?
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  placeholder="Enter Your Mobile No"
                  className="w-full mb-1 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => getMobileNo(e)}
                  maxlength="10"
                />
                <button
                  className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={submit}
                >
                  Call me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto px-5 py-6 flex items-center justify-between sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/assets/logo.jpg"
              alt="carStore-logo"
              width="84"
              height="84"
              style={{
                mixBlendMode: "darken",
              }}
            />
            <span className="ml-3 text-xl">carsStore7x24</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 carsStore7x24
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-500"
              href="https://www.facebook.com/carsstore7x24"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://x.com/carsstore7x24"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/carsstore7x24india/?igsh=czhnZXV4dml5MWZ0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.youtube.com/@carsstore7x24"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://web.telegram.org/a/#6235996466"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.3em"
                width="1.5em"
              >
                <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 01-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 00-.013-.315.337.337 0 00-.114-.217.526.526 0 00-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="group fixed bottom-4 right-4 p-2  flex items-end justify-end w-24 h-24 ">
        <div class="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-red-500 to-red-900 z-50 absolute  ">
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
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-3 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
          <a href="https://wa.me/918860446146">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
            >
              <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
          <a href="mailto:admin@carsstore7x24.in?subject=I need to Buy Car ? ">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5m1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 01-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4 6-4V8l-6 4-6-4z" />
            </svg>
          </a>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
          <a href="tel:+918860446146">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.7em"
              width="1.7em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
