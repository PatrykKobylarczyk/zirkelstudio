import React from "react";

// COMPONENTS
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 items-center text-black">
      <a
        href="https://www.instagram.com/zirkel_studio/"
        target="_blank"
        rel="noreferrer"
        className="group w-5 h-5 grid place-items-center transition duration-200 group-hover:text-red hover:-translate-y-1 hover:text-[#DA0F40]"
      >
        <BsInstagram className="w-3 h-3" />
      </a>
      <a
        href="https://www.facebook.com/zirkelstudio"
        target="_blank"
        rel="noreferrer"
        className="group w-5 h-5 grid place-items-center transition duration-200 group-hover:text-red hover:-translate-y-1 hover:text-[#DA0F40]"
      >
        <FaFacebookF className="w-3 h-3" />
      </a>
    </div>
  );
};

export default SocialMedia;
