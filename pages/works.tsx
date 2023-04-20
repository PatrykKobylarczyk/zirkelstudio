import React, { useState } from "react";
import { images } from "@/data/ImageData";
import { motion } from "framer-motion";
import Thumbnail from "@/components/Thumbnail";
import { Modal } from "@mui/material";
import Image from "next/image";
import { MdWest, MdEast } from "react-icons/md";

//HOOKS
import useMediaQuery from "../hooks/useMediaQuery";
import PageTransitioning from "@/components/PageTransitioning";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  boxShadow: 24,
};

const Works = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(8);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const handleOpenModal = (id: number) => {
    setOpen(true);
    setCurrentImage(id);
  };

  const handlePrevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 37) {
      handlePrevImage();
    } else if (event.keyCode === 39) {
      handleNextImage();
    }
  };

  return (
    <>
      <PageTransitioning />
      <div className="w-[95vw]  m-auto mt-24" data-scroll-section>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-5">
          {images.map((image, i) => (
            <motion.div key={i} onClick={() => handleOpenModal(i)}>
              <Thumbnail image={image.path} />
            </motion.div>
          ))}
        </div>
        {isAboveSmallScreens && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="flex justify-center">
              <div style={style as any} className={`h-[80vh]`}>
                <Image
                  src={images[currentImage].path}
                  alt="Interior photo"
                  className={`h-full aspect-auto m-auto ${
                    currentImage === 0 || currentImage === images.length - 1
                      ? "object-contain"
                      : "object-cover"
                  }`}
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="flex justify-center gap-10 absolute bottom-0 py-5 text-white font-light">
                <button
                  className="w-10 h-10 grid place-items-center border-[1px] border-white rounded-full opacity-60 hover:opacity-90 transition duration-200"
                  onClick={handlePrevImage}
                  onKeyDown={handleKeyDown}
                >
                  <MdWest />
                </button>
                <button
                  className="w-10 h-10 grid place-items-center border-[1px] border-white rounded-full opacity-60 hover:opacity-90 transition duration-200"
                  onClick={handleNextImage}
                  onKeyDown={handleKeyDown}
                >
                  <MdEast />
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Works;
