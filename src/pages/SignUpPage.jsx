import { useTranslation } from "react-i18next";
import AuthNav from "components/Auth/AuthNav";
import GoogleBtn from "components/Auth/GoogleBtn";
import SignUpForm from "components/Auth/SignUpForm";
import BackHomeBtn from "components/Auth/BackHomeBtn";
import { AuthWrap, ScrollContainer } from "components/Auth/CommonAuth.styled";
import {
  AuthText,
  LoginTextBlock,
  WelcomeText,
} from "components/Auth/CommonAuth.styled";

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <AuthWrap $variant="register">
        <BackHomeBtn variant="auth" />
        <LoginTextBlock>
          <WelcomeText>{t("auth.welcome")}</WelcomeText>
          <AuthText>{t("auth.fillFields")}</AuthText>
        </LoginTextBlock>
        <AuthNav />
        <SignUpForm />
        <GoogleBtn text={t("auth.googleSignUp")} />
      </AuthWrap>
    </ScrollContainer>
  );
};

export default SignUpPage;
