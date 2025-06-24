import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed w-full h-24 shadow-xl ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/agslogo.png"
            alt="Logo"
            width="105"
            height="95"
            className="cursor-pointer hover:scale-115"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                {" "}
                Why Us
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Contact Us
              </li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Services
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 uppercase hover:border-b text-xl text-white">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
