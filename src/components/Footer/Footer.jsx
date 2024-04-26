import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { smoothScrollToTarget } from "src/helpers";
import { LogoIcon } from "src/assets/icons";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import {
  FooterContainer,
  AllRightsReservedBlock,
  ContactsBlock,
  FooterContactsList,
  FooterListsWrap,
  FooterNav,
  FooterPositionContainer,
  FooterWrap,
} from "./Footer.styled";
import { LogoLink, LogoName } from "../Header/Header.styled";

const Footer = () => {
  const { t } = useTranslation();
  const windowWidth = useWindowWidth();

  return (
    <FooterWrap id="footer">
      <FooterContainer>
        <FooterPositionContainer>
          <LogoLink
            to="/"
            onClick={() => smoothScrollToTarget("header")}
            aria-label="Heart of Ukraine website logo"
          >
            {windowWidth >= 1440 ? (
              <LogoIcon width={76} height={74} />
            ) : (
              <LogoIcon width={42} height={42} />
            )}
            <LogoName>{t("logo")}</LogoName>
          </LogoLink>

          <FooterListsWrap>
            <FooterNav>
              <ul>
                <li>
                  <Link
                    to="/#about"
                    onClick={() => smoothScrollToTarget("about")}
                  >
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link to="mailto:hunurusni@gmail.com">
                    {t("footer.support")}
                  </Link>
                </li>
                <li>
                  <Link to="/needHelp">{t("footer.needHelp")}</Link>
                </li>
                <li>
                  <Link
                    to="/privacyPolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link to="/wantToHelp">{t("footer.wantToHelp")}</Link>
                </li>
                <li>
                  <Link
                    to="/termsOfUse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footer.termsOfUse")}
                  </Link>
                </li>
              </ul>
            </FooterNav>

            <ContactsBlock>
              <p>{t("footer.contacts")}</p>

              <FooterContactsList>
                <li>
                  <a href="mailto:hunurusni@gmail.com">
                    <svg width={24} height={24}>
                      <use href={`${sprite}#icon-mail`}></use>
                    </svg>
                    hunurusni@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:07645797567900">
                    <svg width={24} height={24}>
                      <use href={`${sprite}#icon-tel`}></use>
                    </svg>
                    07645797567900
                  </a>
                </li>
                <li>
                  <a href="tel:07645797567900">
                    <svg width={24} height={24}>
                      <use href={`${sprite}#icon-tel`}></use>
                    </svg>
                    07645797567900
                  </a>
                </li>
                <li>
                  <a href="tel:07645797567900">
                    <svg width={24} height={24}>
                      <use href={`${sprite}#icon-tel`}></use>
                    </svg>
                    07645797567900
                  </a>
                </li>
              </FooterContactsList>
            </ContactsBlock>
          </FooterListsWrap>
        </FooterPositionContainer>

        <AllRightsReservedBlock>
          <span>C</span>
          <p>{t("footer.allRights")}</p>
        </AllRightsReservedBlock>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
