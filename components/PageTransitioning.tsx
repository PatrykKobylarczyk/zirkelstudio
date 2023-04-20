import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    bottom: 0,
  },
  animate: {
    bottom: "100vh",
    transition: {
      duration: 0.7,
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
    <div className="overflow-hidden">
      <motion.div
        className="ios fixed left-0 w-full h-screen z-[9999] bg-[#af0c32]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      />
      <motion.div
        variants={variants}
        className="ios fixed -bottom-[120vh] left-0 w-full h-screen z-[9999] bg-[#af0c32]"
        exit="exitStop"
      />
    </div>
  );
};

export default PageTransitioning;
