import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUserEmail } from "src/redux/auth/authSelectors";
import Timer from "src/components/Auth/Timer";
import { hideEmail } from "src/helpers";
import { setStorageData, getStorageData } from "src/helpers";
import {
  MailSpan,
  VerificationHead,
  VerificationText,
  VerificationWrap,
} from "./VerificationContent.styled";

const VerificationContent = () => {
  const { t } = useTranslation();
  const storedUserEmail = getStorageData("userEmail");
  const userEmailRedux = useSelector(selectUserEmail);
  const [userEmail, setUserEmail] = useState(userEmailRedux);

  useEffect(() => {
    if (userEmail !== null) {
      setStorageData("userEmail", userEmail);
    } else {
      setUserEmail(storedUserEmail);
    }
  }, [userEmail, storedUserEmail]);

  return (
    <VerificationWrap>
      <VerificationHead>{t("verify.head")}</VerificationHead>
      <VerificationText>
        {t("verify.text.start")} <MailSpan>{hideEmail(userEmail)}</MailSpan>
        {t("verify.text.end")}
      </VerificationText>
      <Timer userEmail={userEmail} />
    </VerificationWrap>
  );
};

export default VerificationContent;
