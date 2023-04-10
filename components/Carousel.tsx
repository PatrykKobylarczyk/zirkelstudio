import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { homeImages } from "@/data/ImageData";
import { motion } from "framer-motion";

const Carousel = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="absolute top-0 left-0 bg-red h-[calc(100%-6rem)] w-full px-2 pb-2 mt-24 overflow-hidden"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 8 }}
        data-scroll-container
        className="h-full flex gap-2 mr-2"
      >
        {homeImages.map((image) => (
          <div key={image.id} className="h-full w-auto min-w-max">
            <Image
              src={image.path}
              alt={image.alt}
              className="h-full w-auto pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
