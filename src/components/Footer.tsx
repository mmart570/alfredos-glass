import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaMedium, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#172e73] text-naama-ivory-100 font-nunito w-full items-center justify-center p-10">
      <div className="bg-[#D9A404] mt-8 hidden h-0.5 w-full md:flex" />
      <div className="flex grid-cols-5 flex-col gap-4 md:grid">
        <div className="border-white flex justify-center border-t-2 pt-4 md:border-0 md:pt-0">
          <Image
            src="/agslogo.png"
            alt="AGS Logo"
            draggable={false}
            height="150"
            width="150"
          />
        </div>
        <div className="flex flex-col gap-2 md:mr-10">
          <p className="hidden text-4xl text-[#D9A404] font-semibold md:block">
            ALFREDO'S GLASS SERVICES
          </p>
        </div>
        <div className="col-span-2 flex flex-col">
          <p className="pb-3 text-2xl font-semibold text-[#D9A404]">Contact</p>
          <div className="flex flex-col text-lg font-light text-[#D9A404]">
            <div className="hover:opacity-65">
              <Link
                href="mailto:alfredosglass@yahoo.com"
                className="flex items-center gap-2 hover:opacity-65"
                target="_blank"
              >
                <MdEmail className="text-2xl text-[#D9A404]" />
                <p>alfredosglass@yahoo.com</p>
              </Link>
            </div>
            <div className="hover:opacity-65">
              <Link
                href="https://www.google.com/maps/place/Winston+Chung+Hall,+Riverside,+CA+92507/@33.975265,-117.328515,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcae5acf0fa1e7:0xa67be5dc0009c039!8m2!3d33.975265!4d-117.3259401!16s%2Fg%2F12hy0dvmg?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="flex gap-2 hover:opacity-65"
              >
                <FaLocationDot className="text-2xl text-acm-blue-700" />
                <div>
                  <p>1180 E 9th St</p>
                  <p>San Bernardino, CA 92410</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D9A404] mt-8 hidden h-0.5 w-full md:flex" />
    </div>
  );
};

export default Footer;
