import React from "react";

//STATE
import { languageState } from "@/atoms/atom";
import { useRecoilState } from "recoil";

const LanguageMenu = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <div className="flex gap-5 lg:gap-2 text-xs">
      <button
        className={`${language === "PL" && "font-bold text-[#DA0F40]"}`}
        onClick={() => setLanguage("PL")}
      >
        PL
      </button>
      <button
        className={`${language === "EN" && "font-bold text-[#DA0F40]"}`}
        onClick={() => setLanguage("EN")}
      >
        EN
      </button>
      <button
        className={`${language === "DE" && "font-bold text-[#DA0F40]"}`}
        onClick={() => setLanguage("DE")}
      >
        DE
      </button>
      <button
        className={`${language === "ES" && "font-bold text-[#DA0F40]"}`}
        onClick={() => setLanguage("ES")}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageMenu;
