import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Thumbnail = ({ image }: any) => {
  return (
    <button className="md:aspect-[4/3] transition duration-200 ease-out md:hover:scale-[1.02] cursor-pointer z-10 overflow-hidden">
      <motion.div
        className="w-full h-full"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.3,
          ease: [0.87, 0.03, 0.12, 1],
        }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="Interior photo"
          className="h-full md:object-cover"
        />
      </motion.div>
    </button>
  );
};

export default Thumbnail;
