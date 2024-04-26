import { useTranslation } from "react-i18next";
import { smoothScrollToTarget } from "helpers";
import heroMob1x from "assets/images/hero/hero-bg-mob@1x.jpg";
import heroMob2x from "assets/images/hero/hero-bg-mob@2x.jpg";
import heroMob4501x from "assets/images/hero/hero-bg-450@1x.jpg";
import heroMob4502x from "assets/images/hero/hero-bg-450@2x.jpg";
import heroTab7681x from "assets/images/hero/hero-bg-768@1x.jpg";
import heroTab7682x from "assets/images/hero/hero-bg-768@2x.jpg";
import heroTab10241x from "assets/images/hero/hero-bg-1024@1x.jpg";
import heroTab10242x from "assets/images/hero/hero-bg-1024@2x.jpg";
import heroDesk1x from "assets/images/hero/hero-bg-desk@1x.jpg";
import heroDesk2x from "assets/images/hero/hero-bg-desk@2x.jpg";
import { HeroArrow, HeroCircle } from "assets/icons";
import { MainContainer } from "layouts/MainContainer.styled";
import {
  HeroDescr,
  HeroImg,
  HeroSection,
  HeroTextBlock,
  JoinUsLink,
  WhoDemandsBlock,
  WillFindBlock,
} from "./Hero.styled";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <HeroSection>
      <MainContainer>
        <HeroTextBlock>
          <WhoDemandsBlock $lang={i18n.language}>
            <p>{t("hero.who")}</p>
            <h2 id="needs">{t("hero.needs")}</h2>
          </WhoDemandsBlock>

          <WillFindBlock $lang={i18n.language}>
            <h2>{t("hero.will")}</h2>
            <p>{t("hero.finds")}</p>
          </WillFindBlock>
        </HeroTextBlock>

        <HeroDescr>{t("hero.descr")}</HeroDescr>

        <JoinUsLink
          type="button"
          onClick={() => smoothScrollToTarget("joinUs")}
        >
          {t("hero.joinUs")}
          <span>
            <HeroArrow />
            <HeroCircle />
          </span>
        </JoinUsLink>
      </MainContainer>

      <HeroImg>
        <source
          srcSet={`${heroDesk1x} 1x, ${heroDesk2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${heroTab10241x} 1x, ${heroTab10242x} 2x`}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={`${heroTab7681x} 1x, ${heroTab7682x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${heroMob4501x} 1x, ${heroMob4502x} 2x`}
          media="(min-width: 450px)"
        />
        <source
          srcSet={`${heroMob1x} 1x, ${heroMob2x} 2x`}
          media="(max-width: 449px)"
        />
        <img src={heroMob1x} alt="Hero Background" />
      </HeroImg>
    </HeroSection>
  );
};

export default Hero;
