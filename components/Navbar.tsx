import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

//HOOKS
import useMediaQuery from "@/hooks/useMediaQuery";

// DATA
import { lang_EN } from "../data/LanguageData";
import { lang_PL } from "../data/LanguageData";
import { lang_HR } from "../data/LanguageData";
import { lang_DE } from "../data/LanguageData";
import { lang_ES } from "../data/LanguageData";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import LanguageMenu from "./LanguageMenu";
import { useRouter } from "next/router";
import SocialMedia from "./SocialMedia";

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
  const router = useRouter();

  const lang = language === "ES" ? lang_ES : language === "DE" ? lang_DE : lang_EN;

  return (
    <>
      <header className="fixed top-0 left-0 bg-white w-full h-24 z-50">
        <div className="w-screen h-full flex justify-between items-center px-5 md:px-20">
          <Link className="text-xl font-bold z-50 ml-4 md:ml-0" href={"/"}>
            zirkelstudio<span className="font-bold text-[#DA0F40]">.</span>
          </Link>
          {isAboveMediumScreens ? (
            <div className="flex gap-10 text-sm items-center">
              <Link
                href="/"
                className={`${
                  router.pathname === "/" && "font-bold text-[#DA0F40]"
                }`}
              >
                {lang.menu_home}
              </Link>
              <Link
                href="/works"
                className={`${
                  router.pathname === "/works" && "font-bold text-[#DA0F40]"
                }`}
              >
                {lang.menu_works}
              </Link>
              <Link
                href="/about"
                className={`${
                  router.pathname === "/about" && "font-bold text-[#DA0F40]"
                }`}
              >
                {lang.menu_about}
              </Link>
              <Link
                href="/contact"
                className={`${
                  router.pathname === "/contact" && "font-bold text-[#DA0F40]"
                }`}
              >
                {lang.menu_contact}
              </Link>
              <LanguageMenu />
              <SocialMedia />
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
              delay: 0.8,
              ease: [0.435, 0.135, 0.09, 0.83],
            }}
            variants={projectVariant}
          ></motion.div>
          <div className="absolute bottom-0 w-full h-20 px-8 flex justify-between items-center">
            <SocialMedia />
            <LanguageMenu />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
