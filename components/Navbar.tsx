import useMediaQuery from "@/hooks/useMediaQueries";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

const menuListAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Navbar = ({ children }: any) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 bg-white w-full h-24 z-50">
        <div className="w-screen h-full flex justify-between items-center px-5 md:px-20">
          <Link className="text-xl font-bold z-50 ml-4 md:ml-0" href={"/"}>
            zirkelstudio.
          </Link>
          {isAboveMediumScreens ? (
            <div className="flex gap-10 text-sm">
              <Link href="/">Home</Link>
              <Link href="/works">Works</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          ) : (
            <div className="">
              <Hamburger
                toggled={isMenuToggled}
                toggle={() => setIsMenuToggled((prev) => !prev)}
                size={15}
                color="black"
              />
            </div>
          )}
        </div>
      </header>
      {children}
      {/* MOBILE MENU POPUP */}
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            className="fixed right-0 top-0 h-full bg-white text-black w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            {/* MENU ITEMS */}
            <AnimatePresence>
              <motion.div
                className="w-screen h-screen flex flex-col gap-6 items-center justify-center text-sm"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                variants={menuListAnimation}
              >
                <motion.div
                  transition={{
                    duration: 0.3,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link href="/" onClick={() => setIsMenuToggled(false)}>
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.3,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link href="/works" onClick={() => setIsMenuToggled(false)}>
                    Works
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.3,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link href="/about" onClick={() => setIsMenuToggled(false)}>
                    About
                  </Link>
                </motion.div>
                <motion.div
                  transition={{
                    duration: 0.3,
                    ease: [0.435, 0.135, 0.09, 0.83],
                  }}
                  variants={projectVariant}
                >
                  <Link href="/contact" onClick={() => setIsMenuToggled(false)}>
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
