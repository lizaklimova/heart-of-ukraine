import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { respondToHelpRequest } from "api/requests";
import { confirmApplicationSchema } from "schemas";
import {
  selectUserFistName,
  selectUserLastName,
  selectUserNumber,
} from "../../../redux/auth/authSelectors";
import sprite from "assets/icons/sprite.svg";
import RegionsSelect from "./RegionsSelect";
import SmallSpinner from "components/Loaders/SmallSpinner";
import {
  CheckBox,
  PrivacyLabel,
  PrivacyText,
} from "components/Auth/SignUpForm/SignUpForm.styled";
import {
  ConfirmBackdrop,
  ConfirmModal,
  ConfirmForm,
  ConfirmLabel,
  ModalText,
  InputField,
  ConfirmSubmitBtn,
  OpenSelectBtn,
} from "./ConfirmationModal.styled";
import { ErrorMsg } from "../CreateTask/CreateTaskForm/CreateTaskForm.styled";

const ConfirmationModal = ({
  reqId,
  setIsConfirmApplicationOpen,
  setIsSuccessModalOpen,
  setIsSuccessOfferModalOpen,
}) => {
  const [submitError, setSubmitError] = useState(null);
  const [regionForBackend, setRegionForBackend] = useState("");
  const [isRegionsSelectOpen, setIsRegionsSelectOpen] = useState(false);

  const location = useLocation();
  const { t, i18n } = useTranslation();
  const firstName = useSelector(selectUserFistName);
  const lastName = useSelector(selectUserLastName);
  const phoneNumber = useSelector(selectUserNumber);
  // eslint-disable-next-line
  const closeModal = () => {
    setIsConfirmApplicationOpen(false);
    document.body.style.overflow = "visible";
  };

  useEffect(() => {
    const handleESCClose = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleESCClose);

    return () => {
      document.removeEventListener("keydown", handleESCClose);
    };
  }, [closeModal]);

  const CONFIRM_INIT_VALUES = {
    firstName: firstName.split(" ")[0],
    lastName,
    phoneNumber: phoneNumber ? phoneNumber : "+380",
    region: "",
    comment: "",
    agreement: false,
  };

  const onSubmit = async ({
    firstName,
    lastName,
    phoneNumber,
    comment,
    agreement,
  }) => {
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      region: regionForBackend,
      comment,
      agreement,
    };
    const isFormDataValid = await confirmApplicationSchema.isValid(formData);
    if (!isFormDataValid) return;
    delete formData.agreement;

    const res = await respondToHelpRequest(formData, reqId);

    if (res !== "") {
      const { enErrorText, uaErrorText } = res?.response?.data?.errorText;
      setSubmitError(t(i18n.language === "uk" ? uaErrorText : enErrorText));
    } else {
      setIsConfirmApplicationOpen(false);

      location?.pathname === "/needHelp"
        ? setIsSuccessModalOpen(true)
        : setIsSuccessOfferModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const {
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: CONFIRM_INIT_VALUES,
    validationSchema: confirmApplicationSchema,
    onSubmit,
  });

  return (
    <>
      <ConfirmBackdrop
        onClick={({ target, currentTarget }) => {
          if (target === currentTarget) {
            setIsConfirmApplicationOpen(false);
            document.body.style.overflow = "visible";
          }
        }}
      >
        <ConfirmModal>
          <button
            id="close"
            type="button"
            aria-label="Close modal"
            onClick={closeModal}
          >
            <svg width={48} height={48}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
          <ModalText>{t("confirmationModal.text")}</ModalText>

          <ConfirmForm onSubmit={handleSubmit}>
            <ConfirmLabel>
              {t("confirmationModal.name")}
              <InputField
                type="text"
                name="firstName"
                placeholder={t("confirmationModal.yourName")}
                maxLength={50}
                onFocus={() => setIsRegionsSelectOpen(false)}
                {...getFieldProps("firstName")}
              />
              {errors.firstName && touched.firstName && (
                <ErrorMsg>{t(errors.firstName)}</ErrorMsg>
              )}
            </ConfirmLabel>
            <ConfirmLabel>
              {t("confirmationModal.surname")}
              <InputField
                type="text"
                name="lastName"
                maxLength={50}
                placeholder={t("confirmationModal.yourSurname")}
                onFocus={() => setIsRegionsSelectOpen(false)}
                {...getFieldProps("lastName")}
              />
              {errors.lastName && touched.lastName && (
                <ErrorMsg>{t(errors.lastName)}</ErrorMsg>
              )}
            </ConfirmLabel>
            <ConfirmLabel>
              {t("confirmationModal.phone")}
              <InputField
                type="tel"
                name="phoneNumber"
                maxLength={13}
                placeholder={t("confirmationModal.yourNum")}
                onFocus={() => setIsRegionsSelectOpen(false)}
                {...getFieldProps("phoneNumber")}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <ErrorMsg>{t(errors.phoneNumber)}</ErrorMsg>
              )}
            </ConfirmLabel>
            <ConfirmLabel>
              {t("confirmationModal.region")}
              <InputField
                type="text"
                name="region"
                placeholder={t("confirmationModal.yourRegion")}
                autoComplete="off"
                readOnly={true}
                {...getFieldProps("region")}
              />

              <OpenSelectBtn
                $isSelectOpen={isRegionsSelectOpen}
                type="button"
                aria-label="Open regions select"
                onClick={() => setIsRegionsSelectOpen((prev) => !prev)}
              >
                <svg width={24} height={20}>
                  <use href={`${sprite}#icon-filter-arrow`}></use>
                </svg>
              </OpenSelectBtn>

              {isRegionsSelectOpen && (
                <RegionsSelect
                  closeSelect={() => setIsRegionsSelectOpen(false)}
                  choseRegion={(event) => {
                    setFieldValue("region", event.target.dataset.region);
                    setRegionForBackend(event.target.dataset.regionen);
                  }}
                />
              )}
            </ConfirmLabel>
            <ConfirmLabel>
              {t("confirmationModal.comment")}
              <textarea
                name="comment"
                placeholder={t("confirmationModal.yourComment")}
                maxLength={9000}
                onFocus={() => setIsRegionsSelectOpen(false)}
                {...getFieldProps("comment")}
              />
              {submitError && <ErrorMsg>{submitError}</ErrorMsg>}
            </ConfirmLabel>
            <PrivacyLabel $variant="confirm">
              <input
                type="checkbox"
                name="agreement"
                onFocus={() => setIsRegionsSelectOpen(false)}
                {...getFieldProps("agreement")}
              />
              <CheckBox
                className={errors.agreement && touched.agreement && "invalid"}
              >
                <svg width={13} height={9}>
                  <use href={`${sprite}#icon-checked`}></use>
                </svg>
              </CheckBox>
              <PrivacyText>{t("confirmationModal.checkbox")}</PrivacyText>
            </PrivacyLabel>
            <ConfirmSubmitBtn
              type="submit"
              className="accent-button"
              disabled={Object.keys(errors).length > 0}
            >
              {isSubmitting ? (
                <SmallSpinner width={20} height={20} />
              ) : (
                t("confirmationModal.send")
              )}
            </ConfirmSubmitBtn>
          </ConfirmForm>
        </ConfirmModal>
      </ConfirmBackdrop>
    </>
  );
};

export default ConfirmationModal;
