import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import {
  RequirList,
  RequirWrap,
  ShowRequirementsBtn,
} from "./PwdRequirements.styled";

const PwdRequirements = ({ error, touched, value, variant }) => {
  const [requirementsMet, setRequirementsMet] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    specialSym: false,
  });

  useEffect(() => {
    const checkRequirements = (newValue) => {
      setRequirementsMet({
        length: newValue.length >= 8 && newValue.length <= 30,
        uppercase: /[A-Z]/.test(newValue),
        lowercase: /[a-z]/.test(newValue),
        digit: /[0-9]/.test(newValue),
        specialSym: /^[a-zA-Z0-9]+$/.test(newValue),
      });
    };

    checkRequirements(value);
  }, [value]);

  const { t } = useTranslation();

  const { length, uppercase, lowercase, digit, specialSym } = requirementsMet;

  return (
    <RequirWrap $variant={variant}>
      <ShowRequirementsBtn
        type="button"
        aria-label="show password requirements"
        className={error && touched ? "invalid" : ""}
      >
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-rules`}></use>
        </svg>
      </ShowRequirementsBtn>

      <RequirList>
        <li>
          <p className={!length && touched ? "invalid" : ""}>
            {t("validation.password.length")}
          </p>
          {length && (
            <svg width={17} height={17}>
              <use href={`${sprite}#icon-checked`}></use>
            </svg>
          )}
        </li>
        <li>
          <p className={!uppercase && touched ? "invalid" : ""}>
            {t("validation.password.uppercase")}
          </p>
          {uppercase && (
            <svg width={17} height={17}>
              <use href={`${sprite}#icon-checked`}></use>
            </svg>
          )}
        </li>
        <li>
          <p className={!lowercase && touched ? "invalid" : ""}>
            {t("validation.password.lowercase")}
          </p>
          {lowercase && (
            <svg width={17} height={17}>
              <use href={`${sprite}#icon-checked`}></use>
            </svg>
          )}
        </li>
        <li>
          <p className={!digit && touched ? "invalid" : ""}>
            {t("validation.password.digit")}
          </p>
          {digit && (
            <svg width={17} height={17}>
              <use href={`${sprite}#icon-checked`}></use>
            </svg>
          )}
        </li>
        <li>
          <p className={!specialSym && touched ? "invalid" : ""}>
            {t("validation.password.specialSym")}
          </p>
          {specialSym && (
            <svg width={17} height={17}>
              <use href={`${sprite}#icon-checked`}></use>
            </svg>
          )}
        </li>
      </RequirList>
    </RequirWrap>
  );
};

export default PwdRequirements;
