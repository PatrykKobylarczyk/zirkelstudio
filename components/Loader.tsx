import React from "react";
import { motion } from "framer-motion";

// DATA
import { lang_EN } from "../data/LanguageData";
import { lang_PL } from "../data/LanguageData";
import { lang_HR } from "../data/LanguageData";

// STATE
import { useRecoilState } from "recoil";
import { languageState } from "../atoms/atom";

const item = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

const projectVariant = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Loader = () => {
  const [language] = useRecoilState(languageState);

  const lang =
    language === "PL" ? lang_PL : language === "HR" ? lang_HR : lang_EN;

  return (
    <motion.div
      className="loader w-full h-screen grid place-items-center bg-white z-[200]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease:[0.14, 0.99, 0.43, 1.01] }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        transition={{
          staggerChildren: 0.5,
          delayChildren: 0.5,
          duration: 0.5,
          delay: 2,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-5 text-black"
      >
        <div className="overflow-hidden">
          <motion.div
            transition={{
              duration: 0.5,
              ease: [0.435, 0.135, 0.09, 0.83],
            }}
            variants={projectVariant}
          >
            <h1 className="text-xl font-bold z-50 ml-4 md:ml-0">zirkelstudio<span className="text-bold text-[#DA0F40]">.</span>
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            transition={{
              duration: 0.5,
              ease: [0.435, 0.135, 0.09, 0.83],
            }}
            variants={projectVariant}
          >
            <p>{lang.loader}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
