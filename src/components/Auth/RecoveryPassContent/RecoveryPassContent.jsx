import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { recoveryPassThunk } from "src/redux/auth/authOperations";
import ShowPasswordBtn from "../ShowPasswordBtn";
import { passwordSchema } from "schemas";
import SmallSpinner from "src/components/Loaders/SmallSpinner";
import PwdRequirements from "../PwdRequirements";
import {
  RecoveryPassHead,
  RecoveryPassText,
  RecoveryPassWrap,
  PassFormCont,
} from "./RecoveryPassContent.styled";
import {
  AuthSubmitBtn,
  AuthInput,
  AuthLabel,
  AuthErrorText,
} from "../CommonAuth.styled";

const RecoveryPassContent = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isRePwdShown, setIsRePwdShown] = useState(false);
  const [dispatchError, setDispatchError] = useState("");
  const [spinnerState, setSpinnerState] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const token = new URLSearchParams(location.search).get("token");

  const validate = useCallback(() => {
    passwordSchema
      .validate({ password, repeatPassword }, { abortEarly: false })
      .then(() => setErrors({}))
      .catch((err) => {
        if (touched) {
          let errObj = {};
          err.inner.forEach((error) => {
            errObj[error.path] = error.message;
          });
          setErrors(errObj);
        }
      });
  }, [password, repeatPassword, touched]);

  useEffect(() => {
    validate();
  }, [validate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();

    setSpinnerState(true);

    const resultAction = await dispatch(
      recoveryPassThunk({
        token,
        newPassword: password,
        repeatNewPassword: repeatPassword,
      })
    );

    setSpinnerState(false);

    if (resultAction.meta.requestStatus === "fulfilled") {
      navigate("/auth/signinsuccess");
    } else
      switch (resultAction.payload) {
        case 400:
          setDispatchError(t("passRecover.pass400"));
          break;
        case 401:
          setDispatchError(t("passRecover.pass401"));
          break;
        case 500:
          setDispatchError(t("passRecover.pass500"));
          break;
        default:
          setDispatchError(t("passRecover.defaultError"));
      }
  };

  const handleInputChange = (setter) => (e) => {
    if (!touched) {
      setTouched(true);
    }
    setter(e.target.value);

    setDispatchError("");
  };

  return (
    <RecoveryPassWrap>
      <RecoveryPassHead>{t("passRecover.head")}</RecoveryPassHead>
      <RecoveryPassText>{t("passRecover.text")}</RecoveryPassText>
      <PassFormCont>
        <AuthLabel className="passwordLabel" style={{ marginBottom: "15px" }}>
          {t("passRecover.password")}
          <AuthInput
            style={{ marginBottom: "15px" }}
            type={isPwdShown ? "text" : "password"}
            className={
              errors.password
                ? "invalid password"
                : "password"
            }
            placeholder={t("auth.placeholder")}
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          <ShowPasswordBtn
            isPwdShown={isPwdShown}
            setPwdShown={setIsPwdShown}
          />
          <PwdRequirements
            error={errors.password}
            touched={touched}
            value={password}
          />
        </AuthLabel>
        <AuthLabel className="passwordLabel">
          {t("passRecover.passwordConf")}
          <AuthInput
            type={isRePwdShown ? "text" : "password"}
            className={
              errors.repeatPassword
                ? "invalid password"
                : "password"
            }
            placeholder={t("auth.placeholder")}
            value={repeatPassword}
            onChange={handleInputChange(setRepeatPassword)}
          />
          <ShowPasswordBtn
            isPwdShown={isRePwdShown}
            setPwdShown={setIsRePwdShown}
          />
          {errors.repeatPassword && (
            <AuthErrorText>{t(errors.repeatPassword)}</AuthErrorText>
          )}
          {dispatchError && <AuthErrorText>{dispatchError}</AuthErrorText>}
        </AuthLabel>
      </PassFormCont>
      <AuthSubmitBtn
        className="accent-button"
        disabled={
          Object.keys(errors).length > 0 || !password || !repeatPassword
        }
        onClick={handleSubmit}
      >
        {spinnerState ? (
          <SmallSpinner width={25} height={25} />
        ) : (
          t("passRecover.button")
        )}
      </AuthSubmitBtn>
    </RecoveryPassWrap>
  );
};

export default RecoveryPassContent;
