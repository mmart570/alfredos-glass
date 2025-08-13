"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-40 z-50">
      <div className="flex items-center justify-center h-full w-full px-4 2xl:px-16 text-[#172E73] font-semibold">
        <Link href="/">
          <Image
            src="/agslogo.png"
            alt="Logo"
            width="150"
            height="50"
            className="cursor-pointer whileHover: { scale: 1.02 }, transition: {stiffness: 300 },"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b text-xl ">
                Services
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 uppercase hover:border-b text-xl ">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className="bg-[#172E73] mb-4 h-0.5 w-full" />
      <div
        className={
          menuOpen
            ? "fixed z-100 left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-10">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-10 text-xl cursor-pointer uppercase font-semibold text-[#172E73]"
              >
                Home
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-10 text-xl cursor-pointer uppercase font-semibold text-[#172E73]"
              >
                Services
              </li>
            </Link>
            <Link href="/gallery">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-10 text-xl cursor-pointer uppercase font-semibold text-[#172E73]"
              >
                Gallery
              </li>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/agslogo.png"
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer pt-6"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
