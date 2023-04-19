import { languageState } from "@/atoms/atom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const LanguageMenu = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <div className="absolute bottom-8 right-5 md:static flex gap-5 lg:gap-2 text-xs">
      <button className={`${language==='HR' && 'font-semibold text-[#DA0F40]'}`} onClick={() => setLanguage("HR")}>HR</button>
      <button className={`${language==='EN' && 'font-semibold text-[#DA0F40]'}`} onClick={() => setLanguage("EN")}>EN</button>
      <button className={`${language==='PL' && 'font-semibold text-[#DA0F40]'}`} onClick={() => setLanguage("PL")}>PL</button>
    </div>
  );
};

export default LanguageMenu;
