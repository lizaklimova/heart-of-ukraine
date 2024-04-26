import { useTranslation } from "react-i18next";
import heartPic from "assets/images/notFound/notfound-heart.png";
import {
  NotFoundSection,
  StatusCodeWrap,
  GoHomeBtn,
  NotFoundText,
} from "./NotFound.styled";
import { MainContainer } from "layouts/MainContainer.styled";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NotFoundSection>
      <MainContainer>
        <StatusCodeWrap>
          <p>4</p>
          <img src={heartPic} alt="decor heart" width={97} height={87} />
          <p>4</p>
        </StatusCodeWrap>
        <NotFoundText>{t("notFound.text")}</NotFoundText>
        <GoHomeBtn to="/" className="accent-button">
          {t("auth.backHome")}
        </GoHomeBtn>
      </MainContainer>
    </NotFoundSection>
  );
};

export default NotFound;
