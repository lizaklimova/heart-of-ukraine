import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { AuthSubmitBtn } from "../CommonAuth.styled";
import {
  SVGSuccess,
  SignInSuccessHead,
  SignInSuccessText,
  SignInSuccessWrap,
} from "./SignInSuccessContent.styled";

const SignInSuccessContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SignInSuccessWrap>
      <SignInSuccessHead>{t("signinsuccess.head")}</SignInSuccessHead>
      <SignInSuccessText>{t("signinsuccess.text")}</SignInSuccessText>
      <SVGSuccess width="177" height="177" viewBox="0 0 177 177" fill="none">
        <use href={`${sprite}#icon-success`} />
      </SVGSuccess>
      <AuthSubmitBtn onClick={() => navigate("/")}>
        {t("signinsuccess.button")}
      </AuthSubmitBtn>
    </SignInSuccessWrap>
  );
};

export default SignInSuccessContent;
