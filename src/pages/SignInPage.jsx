import { useTranslation } from "react-i18next";
import SignInForm from "components/Auth/SignInForm";
import GoogleBtn from "components/Auth/GoogleBtn";
import AuthNav from "components/Auth/AuthNav";
import BackHomeBtn from "components/Auth/BackHomeBtn";
import {
  ResetPwdBlock,
  ResetPwdLink,
} from "components/Auth/SignInForm/SignInForm.styled";
import { AuthWrap, ScrollContainer } from "components/Auth/CommonAuth.styled";
import {
  AuthText,
  LoginTextBlock,
  WelcomeText,
} from "components/Auth/CommonAuth.styled";

const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <ScrollContainer>
      <AuthWrap>
        <BackHomeBtn variant='auth' />
        <LoginTextBlock>
          <WelcomeText>{t("auth.welcome")}</WelcomeText>
          <AuthText>{t("auth.loginText")}</AuthText>
        </LoginTextBlock>

        <AuthNav />
        <SignInForm />
        <ResetPwdBlock>
          <p>{t("auth.forgotPassword")}</p>
          <ResetPwdLink to="/auth/forgotpass">{t("auth.reset")}</ResetPwdLink>
        </ResetPwdBlock>
        <GoogleBtn text={t("auth.googleSignIn")} />
      </AuthWrap>
    </ScrollContainer>
  );
};

export default SignInPage;
