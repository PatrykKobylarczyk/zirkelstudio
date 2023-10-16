import Image from "next/image";
import React from "react";
import profile from "../assets/profile2.jpg";
import { motion } from "framer-motion";

//COMPONENTS
import PageTransitioning from "@/components/PageTransitioning";

// DATA
import { lang_EN } from "../data/LanguageData";
import { lang_PL } from "../data/LanguageData";
import { lang_DE } from "../data/LanguageData";
import { lang_ES } from "../data/LanguageData";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const About = () => {
  const [language] = useRecoilState(languageState);

  const lang = language === "ES" ? lang_ES : language === "DE" ? lang_DE : language === "PL" ? lang_PL : lang_EN;

  return (
    <>
      <PageTransitioning />
      <div className="py-24 w-full h-screen grid place-items-center ">
        <div className="flex flex-col items-center px-5 md:flex-row md:w-[60vw] gap-16 md:gap-24">
          <div className=" w-full md:w-5/12 h-auto overflow-hidden">
            <motion.div
              className="w-full h-full"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease: [0.87, 0.03, 0.12, 1],
              }}
            >
              <Image src={profile} alt="Patryk Kobylarczyk" priority />
            </motion.div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-5 justify-center p-5">
            <div className="overflow-hidden">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  ease: [0.14, 0.99, 0.43, 1.01],
                }}
              >
                {lang.about_hello}
                <span className="text-bold text-[#DA0F40]">{language === 'ES' ? '!' : '.'}</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.8,
                ease: [0.14, 0.99, 0.43, 1.01],
              }}
            >
              {lang.about_par1}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 1,
                ease: [0.14, 0.99, 0.43, 1.01],
              }}
            >
              {lang.about_par2}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 1.2,
                ease: [0.14, 0.99, 0.43, 1.01],
              }}
            >
              {lang.about_par3}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 1.4,
                ease: [0.14, 0.99, 0.43, 1.01],
              }}
            >
              {lang.about_par4}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 1.6,
                ease: [0.14, 0.99, 0.43, 1.01],
              }}
            >
              {lang.about_par5}
            </motion.p>
          </div>
          <div className="pb-10 md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default About;
