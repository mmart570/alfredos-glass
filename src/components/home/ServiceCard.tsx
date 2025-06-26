import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  altText?: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="flex justify-center px-4 sm:px-0">
      <div className="bg-[#BF1736] flex w-full flex-col items-center rounded-4xl p-6 text-wrap shadow-md shadow-black sm:p-8 md:w-3/4">
        <div className="text-[#253767] font-nunito text-lg font-bold sm:text-xl">
          {title}
        </div>
        <p className="text-[#D9A404] font-sans-nunito mt-3 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
