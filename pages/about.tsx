import Image from "next/image";
import React from "react";
import profile from "../assets/profile2.jpg";
import { motion } from "framer-motion";

// DATA
import { lang_EN } from "../data/LanguageData";
import { lang_PL } from "../data/LanguageData";
import { lang_HR } from "../data/LanguageData";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";
import PageTransitioning from "@/components/PageTransitioning";

const About = () => {
  const [language] = useRecoilState(languageState);

  const lang =
    language === "PL" ? lang_PL : language === "HR" ? lang_HR : lang_EN;

  return (
    <>
      <PageTransitioning />
      <div className="py-24 w-full h-screen grid place-items-center ">
        <div className="flex flex-col items-center px-5 md:flex-row md:w-[60vw] gap-16 md:gap-24">
          <div className="w-full md:w-5/12 h-auto">
            <Image src={profile} alt="Patryk Kobylarczyk" priority />
          </div>
          <div className="w-full md:w-7/12 flex flex-col gap-5 justify-center p-5">
            <div className="overflow-hidden">
              <motion.h2
                className="text-3xl font-bold"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {lang.about_hello}
                <span className="text-bold text-[#DA0F40]">.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: .6 }}
            >
              {lang.about_par1}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: .8 }}
            >
              {lang.about_par2}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {lang.about_par3}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {lang.about_par4}
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {lang.about_par5}
            </motion.p>
          </div>
        </div>
        <div className="w-full h-24"/>
      </div>
    </>
  );
};

export default About;
