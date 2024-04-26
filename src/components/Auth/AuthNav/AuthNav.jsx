import { useTranslation } from "react-i18next";
import { NavBlock, AuthNavLink } from "./AuthNav.styled";

const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <NavBlock>
      <AuthNavLink to="/auth/login">{t("auth.login")}</AuthNavLink>
      <AuthNavLink to="/auth/register">{t("auth.register")}</AuthNavLink>
    </NavBlock>
  );
};

export default AuthNav;
