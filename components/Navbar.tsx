import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
// DATA
import { lang_EN } from "../data/LanguageData";
import { lang_PL } from "../data/LanguageData";
import { lang_HR } from "../data/LanguageData";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import LanguageMenu from "./LanguageMenu";

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

  const [language] = useRecoilState(languageState);

  const lang =
    language === "PL" ? lang_PL : language === "HR" ? lang_HR : lang_EN;

  return (
    <>
      <header className="fixed top-0 left-0 bg-white w-full h-24 z-50">
        <div className="w-screen h-full flex justify-between items-center px-5 md:px-20">
          <Link className="text-xl font-bold z-50 ml-4 md:ml-0" href={"/"}>
            zirkelstudio<span className="text-bold text-[#DA0F40]">.</span>
          </Link>
          {isAboveMediumScreens ? (
            <div className="flex gap-10 text-sm items-center">
              <Link href="/">{lang.menu_home}</Link>
              <Link href="/works">{lang.menu_works}</Link>
              <Link href="/about">{lang.menu_about}</Link>
              <Link href="/contact">{lang.menu_contact}</Link>
              <LanguageMenu />
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

      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 top-0 h-full bg-white text-black w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {/* MENU ITEMS */}

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
                {lang.menu_home}
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
                {lang.menu_works}
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
                {lang.menu_about}
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
                {lang.menu_contact}
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.3,
              delay: .8,
              ease: [0.435, 0.135, 0.09, 0.83],
            }}
            variants={projectVariant}
          >
            <LanguageMenu />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
