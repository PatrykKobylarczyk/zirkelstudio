import Image from "next/image";
import React from "react";
import profile from "../assets/profile2.jpg";

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
            <h2 className="text-3xl font-bold">
              {lang.about_hello}
              <span className="text-bold text-[#DA0F40]">.</span>
            </h2>
            <p>{lang.about_par1}</p>
            <p>{lang.about_par2}</p>
            <p>{lang.about_par3}</p>
            <p>{lang.about_par4}</p>
            <p>{lang.about_par5}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
