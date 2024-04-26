import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setStorageData, getStorageData } from "helpers";
import { HelpText, TimerNumber } from "./Timer.styled";
import { AuthSubmitBtn } from "../CommonAuth.styled";
import { verificationThunk } from "../../../redux/auth/authOperations";

const Timer = ({ userEmail }) => {
  const storedTimer = getStorageData("timer");
  const storedIsTimerActive = getStorageData("isTimerActive");

  const [timer, setTimer] = useState(
    storedTimer !== undefined ? storedTimer : 60
  );
  const [isTimerActive, setIsTimerActive] = useState(
    storedIsTimerActive !== undefined ? storedIsTimerActive : true
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalId;

    if (isTimerActive) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalId);
            setIsTimerActive(false);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerActive]);

  useEffect(() => {
    setStorageData("timer", timer);
    setStorageData("isTimerActive", isTimerActive);
  }, [timer, isTimerActive]);

  const restartTimer = () => {
    setTimer(60);
    setIsTimerActive(true);
    dispatch(verificationThunk({ email: userEmail }));
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
    <>
      <TimerNumber className={runningOut}>{formatTime(timer)}</TimerNumber>
      <HelpText>{t("verify.ref")}</HelpText>
      <AuthSubmitBtn
        className="accent-button"
        disabled={isTimerActive}
        onClick={restartTimer}
      >
        {t("verify.button")}
      </AuthSubmitBtn>
    </>
  );
};

export default Timer;
