import { useTranslation } from "react-i18next";
import hand1 from "assets/images/cta/cta-hand1.jpg";
import hand2 from "assets/images/cta/cta-hand2.jpg";
import { CtaArrow } from "assets/icons";
import {
  CtaSection,
  CtaCont,
  CtaCard,
  CtaHead,
  CtaImg,
  CtaLink,
  CtaArrowCont,
} from "./Cta.styled";

const Cta = () => {
  const { t } = useTranslation();

  return (
    <CtaSection id="joinUs">
      <CtaCont>
        <CtaCard>
          <CtaHead>{t("cta.needHelp")}</CtaHead>
          <CtaImg src={hand1} />
          <CtaLink className="accent-button" to="/needHelp">
            {t("cta.push")}
          </CtaLink>
        </CtaCard>
        <CtaArrowCont>
          <CtaArrow />
        </CtaArrowCont>
        <CtaCard>
          <CtaHead>{t("cta.wantHelp")}</CtaHead>
          <CtaImg src={hand2} />
          <CtaLink className="accent-button" to="wantToHelp">
            {t("cta.push")}
          </CtaLink>
        </CtaCard>
      </CtaCont>
    </CtaSection>
  );
};

export default Cta;
