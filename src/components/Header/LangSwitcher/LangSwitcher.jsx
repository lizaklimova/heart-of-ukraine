import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import {
  DropSvgWrap,
  LanguageButtonWrap,
  LanguageDropDown,
  LanguageMenuButton,
  LanguageName,
  LanguageSvgWrap,
  TriangleSvg,
  TriangleSvgWrap,
} from "./LangSwitcher.styled";
import { FlagENGIcon, FlagUAIcon, SwitcherDropdownIcon, SwitcherDropupIcon } from "src/assets/icons";

const LangSwitcher = ({ classN }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onClickLang = (lng) => {
    switch (lng) {
      case "UA":
        i18n.language = "uk";
        break;
      case "ENG":
        i18n.language = "en";
        break;
      default:
        break;
    }
    setIsDropdownOpen(false);
    changeLanguage(i18n.language);
  };

  return (
    <LanguageMenuButton
      className={`${classN}`}
      onClick={toggleDropdown}
      ref={languageMenuRef}
    >
      <LanguageSvgWrap>
        {i18n.language === "en" ? <FlagENGIcon /> : <FlagUAIcon />}
      </LanguageSvgWrap>
      <DropSvgWrap>
        {isDropdownOpen ? <SwitcherDropupIcon /> : <SwitcherDropdownIcon />}
      </DropSvgWrap>
      {isDropdownOpen && (
        <>
          <TriangleSvgWrap>
            <TriangleSvg>
              <use href={`${sprite}#icon-triangle`} />
            </TriangleSvg>
          </TriangleSvgWrap>
          <LanguageDropDown>
            <LanguageButtonWrap
              onClick={() => onClickLang("UA")}
              className={i18n.language === "uk" ? "chosen" : ""}
            >
              <FlagUAIcon />
              <LanguageName className={i18n.language === "uk" ? "chosen" : ""}>
                Українська
              </LanguageName>
            </LanguageButtonWrap>
            <LanguageButtonWrap
              onClick={() => onClickLang("ENG")}
              className={i18n.language === "en" ? "chosen" : ""}
            >
              <FlagENGIcon />
              <LanguageName className={i18n.language === "en" ? "chosen" : ""}>
                English
              </LanguageName>
            </LanguageButtonWrap>
          </LanguageDropDown>
        </>
      )}
    </LanguageMenuButton>
  );
};

export default LangSwitcher;
