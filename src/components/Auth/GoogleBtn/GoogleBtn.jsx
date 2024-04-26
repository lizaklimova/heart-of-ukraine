import { baseURL } from "src/api/axiosInstance";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { DecorOrElement, GoogleLink } from "./GoogleBtn.styled";

const GoogleBtn = ({ text }) => {
  const { t } = useTranslation();

  return (
    <>
      <DecorOrElement>{t("auth.or")}</DecorOrElement>

      <GoogleLink to={`${baseURL}login/oauth2/authorization/google`}>
        {text}
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-google`}></use>
        </svg>
      </GoogleLink>
    </>
  );
};

export default GoogleBtn;
