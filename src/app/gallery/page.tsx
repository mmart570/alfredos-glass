import React from "react";
import Image from "next/image";

const Gallery = () => {
  // save images into array
  const images = [
    {
      src: "/papa.jpg",
      alt: "1st Image",
    },
    {
      src: "/papa.jpg",
      alt: "2nd Image",
    },
    {
      src: "/papa.jpg",
      alt: "3rd Image",
    },
    {
      src: "/papa.jpg",
      alt: "4th Image",
    },
    {
      src: "/papa.jpg",
      alt: "5th Image",
    },
    {
      src: "/papa.jpg",
      alt: "6th Image",
    },
    {
      src: "/papa.jpg",
      alt: "7th Image",
    },
    {
      src: "/papa.jpg",
      alt: "8th Image",
    },
  ];
  return (
    <div className="w-5/6 mx-auto py-10">
      <h1 className="text-8xl text-center font-semibold uppercase text-[#253767]">
        Gallery{" "}
      </h1>
      {/*Map all images in grid display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {images.map((image, i) => (
          <div key={i} className="overflow-hidden rounded-xl cursor-pointer">
            <Image
              src={image.src}
              width={1000}
              height={800}
              alt={image.alt}
              className="hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
