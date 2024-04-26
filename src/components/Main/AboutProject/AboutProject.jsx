import { useTranslation } from "react-i18next";
import desctrMob1x from "assets/images/about/destructions-mob-@1x.jpg";
import desctrMob2x from "assets/images/about/destructions-mob-@2x.jpg";
import desctrTab1x from "assets/images/about/destructions-tab-@1x.jpg";
import desctrTab2x from "assets/images/about/destructions-tab-@2x.jpg";
import desctrDesk1x from "assets/images/about/destructions-desk-@1x.jpg";
import desctrDesk2x from "assets/images/about/destructions-desk-@2x.jpg";
import grannyMob1x from "assets/images/about/granny-mob-@1x.jpg";
import grannyMob2x from "assets/images/about/granny-mob-@2x.jpg";
import grannyTab1x from "assets/images/about/granny-tab-@1x.jpg";
import grannyTab2x from "assets/images/about/granny-tab-@2x.jpg";
import grannyDesk1x from "assets/images/about/granny-desk-@1x.jpg";
import grannyDesk2x from "assets/images/about/granny-desk-@2x.jpg";
import {
  AboutArrow,
  HorizontalArrowMob,
  HorizontalArrowTab,
  HorizontalArrowDesk,
} from "assets/icons";
import { aboutProject } from "data";
import { MainContainer } from "layouts/MainContainer.styled";
import { Title } from "../CommonStyles.styled";
import {
  AboutSection,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  SectionWrap,
  BottomArrowBlock,
} from "./AboutProject.styled";

const AboutProject = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language === "uk";

  const {
    firstLineUa,
    firstLineEn,
    secondLineUa,
    secondLineEn,
    thirdLineUa,
    thirdLineEn,
  } = aboutProject;
  return (
    <AboutSection>
      <MainContainer>
        <SectionWrap>
          <Title id="about">{t("about.title")}</Title>

          <AboutArrow id={"vertical"} />

          <FirstBlock>
            <p>{currentLanguage ? firstLineUa : firstLineEn}</p>

            <picture>
              <source
                srcSet={`${desctrDesk1x} 1x, ${desctrDesk2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${desctrTab1x} 1x, ${desctrTab2x} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${desctrMob1x} 1x, ${desctrMob2x} 2x`}
                media="(max-width: 767px)"
              />
              <img src={desctrMob1x} alt="Destructions" />
            </picture>
          </FirstBlock>

          <SecondBlock>
            {currentLanguage ? secondLineUa : secondLineEn}
          </SecondBlock>

          <ThirdBlock>
            <p>{currentLanguage ? thirdLineUa : secondLineEn}</p>
            <picture>
              <source
                srcSet={`${grannyDesk1x} 1x, ${grannyDesk2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${grannyTab1x} 1x, ${grannyTab2x} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${grannyMob1x} 1x, ${grannyMob2x} 2x`}
                media="(max-width: 767px)"
              />
              <img src={grannyMob1x} alt="Granny" />
            </picture>
          </ThirdBlock>
        </SectionWrap>
        <BottomArrowBlock>
          <HorizontalArrowMob />
          <HorizontalArrowTab />
          <HorizontalArrowDesk />
        </BottomArrowBlock>
      </MainContainer>
    </AboutSection>
  );
};

export default AboutProject;
