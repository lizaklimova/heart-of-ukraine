import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { BackBtn } from './BackBtnStyled';

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <BackBtn onClick={() => navigate(-1)}  className="accent-text">
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-go-back`}></use>
      </svg>
      {t("auth.back")}
    </BackBtn>
  );
};

export default BackButton;