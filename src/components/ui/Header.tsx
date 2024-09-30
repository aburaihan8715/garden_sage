"use client";
import { useState } from "react";

import { Button } from "../ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import Link from "next/link";
import Image from "next/image";
import BrandLogo from "./BrandLogo";
import { MdClose, MdMenu } from "react-icons/md";

// HEADER COMPONENT
const Header = () => {
  const [open, setOpen] = useState(true);

  const menuItems = (
    <>
      <li>
        <Link className="border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary" href="/meeting-rooms">
          Meeting rooms
        </Link>
      </li>
      <li>
        <Link className="border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary" href="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link className="border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary" href="/contact">
          Contact Us
        </Link>
      </li>

      <li>
        <Link className="border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary" href={`/dashboard`}>
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <header>
      {/* DESKTOP NAV */}
      <div className="lg:flex hidden bg-orange-50 justify-between h-[80px] items-center px-10 fixed top-0 w-full z-20">
        {/* LOGO */}
        <Link href="/">
          <BrandLogo />
        </Link>
        <nav>
          <ul className="flex gap-4 font-semibold text-gray-700">{menuItems}</ul>
        </nav>

        {/* LOGIN,PROFILE GROUP */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <ProfilePopover />
          </div>

          <div>
            <Link href={`/login`}>
              <Button>Login</Button>
            </Link>
          </div>

          <div>
            <Button>Logout</Button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden">
        <div className="flex px-2 bg-[#e9effd] h-[80px] items-center justify-between fixed top-0 w-full z-20">
          <div onClick={() => setOpen(!open)} className="">
            {open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <MdMenu />
              </button>
            )}

            {!open && (
              <button className="flex items-center justify-center w-10 h-10 text-3xl border text-primary border-primary">
                <MdClose />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ProfilePopover />
            </div>

            <div>
              <Link href={`/login`}>
                <Button>Login</Button>
              </Link>
            </div>

            <div>
              <Button>Logout</Button>
            </div>
          </div>
        </div>

        <nav className="">
          <ul
            className={`flex bg-yellow-50/90 fixed top-[80px] z-20 h-full flex-col gap-2 font-semibold text-[#212529] pt-5 pl-8 w-[180px] -translate-x-[100%] transition-transform duration-500 ${
              !open && "translate-x-0"
            }`}
          >
            {menuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// PROFILE POPOVER COMPONENT
const ProfilePopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Image
          className="object-cover w-10 h-10 rounded-full"
          src="https://images.pexels.com/photos/1134062/pexels-photo-1134062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={40}
          height={40}
          alt=""
        />
      </PopoverTrigger>
      <PopoverContent className="mt-5">
        <h4 className="text-lg font-semibold">My account</h4>
        <hr className="my-2 border-gray-300" />

        <>
          <div className="flex flex-col gap-2">
            <Link href="/dashboard/admin" className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary">
              Dashboard
            </Link>
            <button className="text-left border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary">Logout</button>
          </div>
        </>

        <>
          <div className="flex flex-col gap-2">
            <Link href="/dashboard/my-bookings" className="border-b-2 border-b-transparent w-fit hover:border-b-2 hover:border-b-primary">
              My booking
            </Link>
            <button className="text-left  border-b-2 border-b-transparent  hover:border-b-2 hover:border-b-primary">Logout</button>
          </div>
        </>
      </PopoverContent>
    </Popover>
  );
};
