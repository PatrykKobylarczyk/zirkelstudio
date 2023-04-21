import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//DATA
import { homeImages } from "@/data/ImageData";

const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="fixed top-0 left-0 h-[calc(100%-6rem)] w-full px-2 pb-2 mt-24 overflow-x-hidden"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 8 }}
        className="h-full flex gap-2 mr-2 hover:cursor-grab active:cursor-grabbing"
      >
        {homeImages.map((image) => (
          <div key={image.id} className="h-full w-auto min-w-max">
            <Image
              src={image.path}
              alt= "real estate photo"
              className="h-full w-auto pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
