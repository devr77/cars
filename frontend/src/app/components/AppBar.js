"use client";

import React from "react";
import {
  Chip,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";

import { cities } from "@/utils/cities";

function AppBar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/">
            <Image
              src="/assets/logo.jpg"
              alt="carStore-logo"
              width="100"
              height="100"
            />
          </a>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm font-bold">
                <div id="bouton" class="relative group/bouton">
                  <li className="flex">
                    <a
                      className="text-black-500 transition hover:text-red-600"
                      href="#"
                    >
                      New Cars
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </li>
                  <div className="absolute w-full bg-white top-full bg-stone-50 origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                    <div
                      className="absolute  z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          View on Storefront
                        </a>
                      </div>

                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          View on Storefront
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <li className="flex">
                  <a
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Used Cars
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </li>

                <li>
                  <a
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Car Loan
                  </a>
                </li>

                <li>
                  <a
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Sell Car
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 px-5 py-2.5">
              <IconButton variant="text" onClick={handleOpenDialog}>
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                </svg>
              </IconButton>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="https://carsstore24x7.sanity.studio/structure"
                >
                  Login
                </a>
              </div>
            </div>

            <Dialog size="md" open={openDialog} handler={handleOpenDialog}>
              <DialogHeader>Chose Your Location</DialogHeader>
              <DialogBody>
                <select
                  id="model"
                  class="h-12 border border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                  onChange={(e) => alert(e.target.value)}
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
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="outlined"
                  color="red"
                  onClick={handleOpenDialog}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </DialogFooter>
            </Dialog>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={openDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4"
        placement="right"
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="red">
            CarsStore24x7
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M959 413.4L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z" />
              </svg>
            </ListItemPrefix>
            New Cars
            <ListItemSuffix>
              <Chip
                value="5"
                size="sm"
                color="green"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M11.707 2.293A.996.996 0 0011 2H6a.996.996 0 00-.707.293l-3 3A.996.996 0 002 6v5c0 .266.105.52.293.707l10 10a.997.997 0 001.414 0l8-8a.999.999 0 000-1.414l-10-10zM8.353 10a1.647 1.647 0 11-.001-3.293A1.647 1.647 0 018.353 10z" />
              </svg>
            </ListItemPrefix>
            Used Cars
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Car Loan
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M11.707 2.293A.996.996 0 0011 2H6a.996.996 0 00-.707.293l-3 3A.996.996 0 002 6v5c0 .266.105.52.293.707l10 10a.997.997 0 001.414 0l8-8a.999.999 0 000-1.414l-10-10zM8.353 10a1.647 1.647 0 11-.001-3.293A1.647 1.647 0 018.353 10z" />
              </svg>
            </ListItemPrefix>
            Sell Car
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Contact US
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}

export default AppBar;
