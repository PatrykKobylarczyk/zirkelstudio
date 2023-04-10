import React from "react";
import { images } from "@/data/ImageData";
import { motion } from "framer-motion";
import Thumbnail from "@/components/Thumbnail";

// const item = {
//   hidden: { x: 20, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

const Works = () => {
  return (
    <div className="w-[95vw]  m-auto mt-24">
      <div className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-2 sm:gap-5">
        {images.map((image, i) => (
          <motion.div
            key={i}
            // variants={item}
            // onClick={() =>
            //   handleImageModal(image.node.childImageSharp.gatsbyImageData, i)
            // }
          >
            <Thumbnail
              image={image.path}
              // setShowModal={setShowModal}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
