import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { emailSchema } from "schemas";
import SmallSpinner from "src/components/Loaders/SmallSpinner";
import { forgotPassThunk } from "src/redux/auth/authOperations";
import { hideEmail } from "src/helpers";
import {
  SmallText,
  MailSpan,
  Timer,
  ForgotPassHead,
  ForgotPassText,
  ForgotPassWrap,
  EmailFormCont,
} from "./ForgotPassContent.styled";
import {
  AuthSubmitBtn,
  AuthInput,
  AuthLabel,
  AuthErrorText,
} from "../CommonAuth.styled";

const ForgotPassContent = () => {
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(300);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dispatchError, setDispatchError] = useState("");
  const [spinnerState, setSpinnerState] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    emailSchema
      .validateAt("email", { email: newEmail })
      .then(() => setEmailError(""))
      .catch((err) => setEmailError(t(err.message)));

    setDispatchError("");
  };

  const handleSubmit = async () => {
    setSpinnerState(true);

    const resultAction = await dispatch(
      forgotPassThunk({
        email: email,
      })
    );

    setSpinnerState(false);

    if (resultAction.meta.requestStatus === "fulfilled") {
      setSubmitted(true);
      startTimer();
    } else
      switch (resultAction.payload) {
        case 404:
          setDispatchError(t("passRecover.email404"));
          break;
        case 500:
          setDispatchError(t("passRecover.email500"));
          break;
        default:
          setDispatchError(t("passRecover.defaultError"));
      }
  };

  useEffect(() => {
    if (submitted && isTimerActive) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalId);
            setIsTimerActive(false);
            return prevTimer;
          }
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isTimerActive, submitted]);

  const startTimer = () => {
    setIsTimerActive(true);
    setTimer(300);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const isLessThanTenSeconds = timer < 10;
  const runningOut = isLessThanTenSeconds ? "timer-low" : "";

  return (
    <ForgotPassWrap>
      <ForgotPassHead>{t("auth.passwordRecover")}</ForgotPassHead>
      {!submitted ? (
        <>
          <ForgotPassText>{t("auth.enterEmail")}</ForgotPassText>
          <EmailFormCont>
            <AuthLabel>
              {t("auth.email")}
              <AuthInput
                placeholder={t("auth.placeholder")}
                onChange={handleEmailChange}
              />
              {emailError && <AuthErrorText>{emailError}</AuthErrorText>}
              {dispatchError && <AuthErrorText>{dispatchError}</AuthErrorText>}
            </AuthLabel>
          </EmailFormCont>
          <AuthSubmitBtn
            onClick={handleSubmit}
            disabled={emailError || email.length === 0}
            className="accent-button"
          >
            {spinnerState ? (
              <SmallSpinner width={25} height={25} />
            ) : (
              t("auth.reset")
            )}
          </AuthSubmitBtn>
        </>
      ) : (
        <>
          <ForgotPassText>
            {t("auth.onEmail")} <MailSpan>{hideEmail(email)}</MailSpan>{" "}
            {t("auth.linkSended")}
          </ForgotPassText>
          <Timer className={runningOut}>{formatTime(timer)}</Timer>
          <SmallText>{t("auth.noLink")}</SmallText>
          <AuthSubmitBtn
            disabled={isTimerActive}
            onClick={handleSubmit}
            className="accent-button"
          >
            {spinnerState ? (
              <SmallSpinner width={25} height={25} />
            ) : (
              t("auth.sendAgain")
            )}
          </AuthSubmitBtn>
        </>
      )}
    </ForgotPassWrap>
  );
};

export default ForgotPassContent;
