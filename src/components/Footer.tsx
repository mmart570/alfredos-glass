import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMedium, FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-naama-ivory-100 font-nunito w-full items-center justify-center p-10">
      <div className="bg-[#172E73] mb-4 hidden h-0.5 w-full md:flex" />
      <div className="flex grid-cols-5 flex-col gap-4 md:grid text-[#172E73]">
        <div className="border-[#172E73] flex justify-center border-t-2 pt-4 md:border-0 md:pt-0">
          <Image
            src="/logo.svg"
            alt="AGS Logo"
            draggable={false}
            height="300"
            width="300"
          />
        </div>
        <div className="flex flex-col gap-2 md:mr-10">
          <p className="hidden text-4xl  font-semibold md:block">
            ALFREDO'S GLASS SERVICES
          </p>
        </div>
        <div className="flex flex-col">
          <p className="pb-3 text-2xl font-semibold ">QUICK LINKS</p>
          <div className="flex flex-col text-lg font-light ">
            <Link href="/services" className="hover:opacity-65">
              Services
            </Link>
            <Link href="/gallery" className="hover:opacity-65">
              Gallery
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <p className="pb-3 text-2xl font-semibold ">CONTACT</p>
          <div className="flex flex-col text-lg font-light ">
            <div className="hover:opacity-65">
              <Link
                href="tel:909-913-3642"
                className="flex items-center gap-2 hover:opacity-65"
                target="_blank"
              >
                <FaPhoneVolume className="text-2xl " />
                <p>(909) 913-3642</p>
              </Link>
            </div>
            <div className="hover:opacity-65">
              <Link
                href="mailto:alfredosglass@yahoo.com"
                className="flex items-center gap-2 hover:opacity-65"
                target="_blank"
              >
                <MdEmail className="text-2xl " />
                <p>alfredosglass@yahoo.com</p>
              </Link>
            </div>
            <div className="hover:opacity-65">
              <Link
                href="https://www.google.com/maps/place/Alfredo's+Glass+Services/@34.1165477,-117.2626643,20.1z/data=!4m6!3m5!1s0x80c3554dcfdb6a35:0xb9b3eac3b148e556!8m2!3d34.1163136!4d-117.2625948!16s%2Fg%2F11y6tnr05m?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="flex gap-2 hover:opacity-65"
              >
                <FaLocationDot className="text-2xl " />
                <div>
                  <p>1180 E 9th St</p>
                  <p>San Bernardino, CA 92410</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#172E73] mt-4 h-0.5 w-full md:flex" />
    </div>
  );
};

export default Footer;
