import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import sprite from "assets/icons/sprite.svg";
import { registerSchema } from "schemas";
import { REGISTER_INIT_VALUES } from "constants";
import { registrationThunk } from "../../../redux/auth/authOperations";
import ShowPasswordBtn from "../ShowPasswordBtn";
import PwdRequirements from "../PwdRequirements";
import Notification from "components/Notification";
import SmallSpinner from "components/Loaders/SmallSpinner";
import { authSlice } from "../../../redux/auth/authSlice";
import { setStorageData } from "helpers";
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthErrorText,
  AuthSubmitBtn,
} from "../CommonAuth.styled";
import { PrivacyLabel, CheckBox, PrivacyText } from "./SignUpForm.styled";

const SignUpForm = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isConfirmPwdShown, setIsConfirmPwdShown] = useState(false);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLanguageUk = i18n.language === "uk";

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    repeatPassword,
    agreement,
  }) => {
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      repeatPassword,
      agreement,
    };

    if (!lastName) {
      delete formData.lastName;
    }

    const isFormDataValid = await registerSchema.isValid(formData);
    if (!isFormDataValid) return;

    const res = await dispatch(
      registrationThunk({ ...formData, agreement: undefined })
    );

    // if (res.error) {
    //   toast.custom((t) => (
    //     <Notification
    //       iconId="notify-error"
    //       className="error"
    //       title={"auth.registerErrorMsg"}
    //       text={
    //         isLanguageUk
    //           ? res.payload.errorText.uaErrorText
    //           : res.payload.errorText.enErrorText
    //       }
    //       closeToaster={() => toast.remove(t.id)}
    //       variant="auth"
    //     />
    //   ));
    // }

    dispatch(authSlice.actions.setUserEmail(formData.email));
    setStorageData("timer", 60);
    setStorageData("isTimerActive", true);

    if (!res.error) {
      navigate("/auth/verification");
    }
  };

  const { errors, values, touched, getFieldProps, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: REGISTER_INIT_VALUES,
      validationSchema: registerSchema,
      onSubmit,
    });

  return (
    <AuthForm onSubmit={handleSubmit} $variant="register">
      <AuthLabel $variant="register">
        {t("auth.firstName")}
        <AuthInput
          type="text"
          placeholder={t("auth.placeholder")}
          className={errors.firstName && touched.firstName && "invalid"}
          maxLength={50}
          {...getFieldProps("firstName")}
        />
        {errors.firstName && touched.firstName && (
          <AuthErrorText>{t(errors.firstName)}</AuthErrorText>
        )}
      </AuthLabel>

      <AuthLabel $variant="register">
        {t("auth.lastName")}
        <AuthInput
          type="text"
          placeholder={t("auth.placeholder")}
          className={errors.lastName && touched.lastName && "invalid"}
          maxLength={50}
          {...getFieldProps("lastName")}
        />
        {errors.lastName && touched.lastName && (
          <AuthErrorText>{t(errors.lastName)}</AuthErrorText>
        )}
      </AuthLabel>

      <AuthLabel $variant="register">
        {t("auth.email")}
        <AuthInput
          type="email"
          placeholder={t("auth.placeholder")}
          className={errors.email && touched.email && "invalid"}
          {...getFieldProps("email")}
          maxLength={128}
        />
        {errors.email && touched.email && (
          <AuthErrorText>{t(errors.email)}</AuthErrorText>
        )}
      </AuthLabel>

      <AuthLabel $variant="register">
        {t("auth.phone")}
        <AuthInput
          type="tel"
          className={errors.phoneNumber && touched.phoneNumber && "invalid"}
          autoComplete="off"
          {...getFieldProps("phoneNumber")}
          maxLength={13}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <AuthErrorText>{t(errors.phoneNumber)}</AuthErrorText>
        )}
      </AuthLabel>

      <AuthLabel className="passwordLabel" $variant="register">
        {t("auth.password")}
        <AuthInput
          type={isPwdShown ? "text" : "password"}
          placeholder={t("auth.placeholder")}
          className={
            errors.password && touched.password
              ? "invalid password"
              : "password"
          }
          maxLength={100}
          {...getFieldProps("password")}
        />

        <ShowPasswordBtn isPwdShown={isPwdShown} setPwdShown={setIsPwdShown} />
        <PwdRequirements
          error={errors.password}
          touched={touched.password}
          value={values.password}
        />
      </AuthLabel>

      <AuthLabel
        id="repeat-password"
        className="passwordLabel"
        $variant="register"
      >
        {t("auth.password")}
        <AuthInput
          type={isConfirmPwdShown ? "text" : "password"}
          placeholder={t("auth.placeholder")}
          className={
            errors.repeatPassword && touched.repeatPassword
              ? "confirm-password invalid"
              : "confirm-password"
          }
          maxLength={100}
          {...getFieldProps("repeatPassword")}
        />
        {errors.repeatPassword && touched.repeatPassword && (
          <AuthErrorText>{t(errors.repeatPassword)}</AuthErrorText>
        )}
        <ShowPasswordBtn
          isPwdShown={isConfirmPwdShown}
          setPwdShown={setIsConfirmPwdShown}
        />
      </AuthLabel>

      <PrivacyLabel>
        <input
          type="checkbox"
          name="agreement"
          {...getFieldProps("agreement")}
        />
        <CheckBox
          className={errors.agreement && touched.agreement && "invalid"}
        >
          <svg width={13} height={9}>
            <use href={`${sprite}#icon-checked`}></use>
          </svg>
        </CheckBox>
        <PrivacyText>
          {t("auth.agreement")}{" "}
          <a href="/privacyPolicy" target="_blank" rel="noopener noreferrer">
            {t("auth.privacyPolicy")}
          </a>
        </PrivacyText>
      </PrivacyLabel>

      <AuthSubmitBtn
        type="submit"
        className="accent-button"
        disabled={Object.keys(errors).length > 0}
      >
        {isSubmitting ? (
          <SmallSpinner width={20} height={20} />
        ) : (
          t("auth.signUp")
        )}
      </AuthSubmitBtn>
    </AuthForm>
  );
};

export default SignUpForm;
