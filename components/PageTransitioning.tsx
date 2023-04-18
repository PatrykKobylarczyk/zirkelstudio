import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    bottom: 0,
  },
  animate: {
    bottom: "100vh",
    transition: {
      duration: .7,
      ease: [0.12, 1, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
  exitStop: {
    bottom: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: [0.12, 1, 0.2, 1],
    },
  },
};

const PageTransitioning = () => {
  return (
    <>
      <motion.div
        className="fixed left-0 w-full h-screen z-[9999] bg-black"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      />
      <motion.div
        variants={variants}
        className="fixed -bottom-full left-0 w-full h-screen z-[9999] bg-red-500"
        exit="exitStop"
       
      />
    </>
  );
};

export default PageTransitioning;
