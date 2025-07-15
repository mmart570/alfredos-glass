import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full h-40 z-50">
      <div className="flex items-center justify-center h-full w-full px-4 2xl:px-16 text-[#172E73] font-semibold">
        <Link href="/">
          <Image
            src="/agslogo.png"
            alt="Logo"
            width="150"
            height="50"
            className="cursor-pointer  whileHover: { scale: 1.02 }, transition: {stiffness: 300 },"
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
      </div>
      <div className="bg-[#172E73] mb-4 hidden h-0.5 w-full md:flex" />
    </nav>
  );
};

export default NavBar;
