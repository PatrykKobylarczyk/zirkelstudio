import Image from "next/image";
import React from "react";

const Thumbnail = ({ image, setShowModal }: any) => {
  return (
    <button
      className="w-full md:aspect-[4/3] transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-10"
      //   onClick={() => {
      //     setShowModal(true);
      //   }}
    >
      <Image src={image} alt="Interior photo" className="h-full md:object-cover"  />
    </button>
  );
};

export default Thumbnail;
