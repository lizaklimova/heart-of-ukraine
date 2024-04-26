import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { loginThunk } from "../../../redux/auth/authOperations";
import { LOGIN_INIT_VALUES } from "constants/index";
import ShowPasswordBtn from "../ShowPasswordBtn";
import SmallSpinner from "components/Loaders/SmallSpinner";
import {
  AuthForm,
  AuthLabel,
  AuthInput,
  AuthErrorText,
  AuthSubmitBtn,
} from "../CommonAuth.styled";

const SignInForm = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [areCredentialsInvalid, setAreCredentialsInvalid] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const formData = {
      email,
      password,
    };

    const res = await dispatch(loginThunk(formData));

    if (res.error && res.error.message === "Rejected") {
      setAreCredentialsInvalid(true);
    } else {
      navigate("/");
    }
  };

  const { getFieldProps, handleSubmit, isSubmitting } = useFormik({
    initialValues: LOGIN_INIT_VALUES,
    onSubmit,
  });

  return (
    <AuthForm onSubmit={handleSubmit}>
      <AuthLabel>
        {t("auth.email")}
        <AuthInput
          type="email"
          placeholder={t("auth.placeholder")}
          className={areCredentialsInvalid && "invalid"}
          {...getFieldProps("email")}
          maxLength={128}
        />
      </AuthLabel>

      <AuthLabel className="passwordLabel">
        {t("auth.password")}
        <AuthInput
          type={isPwdShown ? "text" : "password"}
          placeholder={t("auth.placeholder")}
          className={
            areCredentialsInvalid
              ? "sign-in-password invalid"
              : "sign-in-password"
          }
          {...getFieldProps("password")}
          maxLength={100}
        />
        {areCredentialsInvalid && (
          <AuthErrorText>{t("validation.check")}</AuthErrorText>
        )}
        <ShowPasswordBtn isPwdShown={isPwdShown} setPwdShown={setIsPwdShown} />
      </AuthLabel>

      <AuthSubmitBtn type="submit" className="accent-button">
        {isSubmitting ? (
          <SmallSpinner width={20} height={20} />
        ) : (
          t("auth.signIn")
        )}
      </AuthSubmitBtn>
    </AuthForm>
  );
};

export default SignInForm;
