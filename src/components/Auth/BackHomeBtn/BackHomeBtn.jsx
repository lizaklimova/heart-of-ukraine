import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { HomeLink } from "./BackHomeBtn.styled";

const BackHomeBtn = ({ variant, to = "/", text = "auth.backHome" }) => {
  const { t } = useTranslation();

  return (
    <HomeLink to={to} $variant={variant} className="accent-text">
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-go-back`}></use>
      </svg>
      {t(text)}
    </HomeLink>
  );
};

export default BackHomeBtn;
