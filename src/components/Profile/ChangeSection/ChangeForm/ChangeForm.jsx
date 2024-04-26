import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SmallSpinner from "src/components/Loaders/SmallSpinner";
import changeSchema from "src/schemas/changeSchema";
import sprite from "assets/icons/sprite.svg";
import {
  selectEmail,
  selectUserComment,
  selectUserFistName,
  selectUserLastName,
  selectUserNumber,
  selectUserOrganization,
  selectUserRegion,
} from "../../../../redux/auth/authSelectors";
import { changeProfileThunk, getCurrentThunk } from "../../../../redux/auth/authOperations";
import WarningModal from "src/components/Profile/WarningModal/WarningModal";
import RegionsSelect from "src/components/Tasks/ConfirmationModal/RegionsSelect";
import {
  ChangeArea,
  ChangeBtnWrap,
  ChangeCancelBtn,
  ChangeErrorText,
  ChangeFormEl,
  ChangeInput,
  ChangeInputWrap,
  ChangeLabel,
  ChangePasswordLink,
  ChangeSubmitBtn,
  InputsCont,
} from "./ChangeForm.styled";
import { OpenSelectBtn } from "src/components/Tasks/ConfirmationModal/ConfirmationModal.styled";

const ChangeForm = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userFirstName = useSelector(selectUserFistName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectEmail);
  const userNumber = useSelector(selectUserNumber);
  const userRegion = useSelector(selectUserRegion);
  const userOrganization = useSelector(selectUserOrganization);
  const userComment = useSelector(selectUserComment);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [regionForBackend, setRegionForBackend] = useState(userRegion.regionEn || "");
  const [isRegionsSelectOpen, setIsRegionsSelectOpen] = useState(false);

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const region = () => {
    let regionName;

    if (!userRegion) {
      return;
    }

    if (i18n.language === "uk") {
      regionName = userRegion?.regionUa?.toLowerCase();
    } else {
      regionName = userRegion?.regionEn?.toLowerCase();
    }

    const regionUpperName =
      regionName?.charAt(0).toUpperCase() + regionName?.slice(1);

    if (regionUpperName === "Крим" || regionUpperName === "Crimea") {
      return regionUpperName;
    }

    return `${regionUpperName} ${t("profile.personal.regionName")}`;
  };

  const CHANGE_INIT_VALUES = {
    firstName: userFirstName || "",
    lastName: userLastName || "",
    email: userEmail || "",
    phoneNumber: userNumber || "",
    region: region() || "",
    organization: userOrganization || "",
    comment: userComment || "",
  };

  const onSubmit = async ({
    firstName,
    lastName,
    phoneNumber,
    organization,
    comment,
  }) => {
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      userAdditionalDetails: {
        region: regionForBackend,
        organization,
        comment,
      },
    };

    if (!lastName) {
      delete formData.lastName;
    }

    if (!regionForBackend) {
      delete formData.region;
    }

    if (!organization) {
      delete formData.organization;
    }

    if (!comment) {
      delete formData.comment;
    }

    const isFormDataValid = await changeSchema.isValid(formData);
    if (!isFormDataValid) return;

    const res = await dispatch(changeProfileThunk({ formData }));

    if (!res.error) {
      dispatch(getCurrentThunk());
      navigate("/profile/personal");
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
    initialValues: CHANGE_INIT_VALUES,
    validationSchema: changeSchema,
    onSubmit,
  });

  return (
    <>
      <ChangeFormEl onSubmit={handleSubmit}>
        <InputsCont>
          <ChangeInputWrap>
            <ChangeLabel>{t("profile.change.firstName")}</ChangeLabel>
            <ChangeInput
              type="text"
              name="firstName"
              placeholder={t("profile.change.placeholder")}
              className={errors.firstName && touched.firstName && "invalid"}
              maxLength={50}
              onFocus={() => setIsRegionsSelectOpen(false)}
              {...getFieldProps("firstName")}
            />
            {errors.firstName && touched.firstName && (
              <ChangeErrorText>{t(errors.firstName)}</ChangeErrorText>
            )}
          </ChangeInputWrap>

          <ChangeInputWrap>
            <ChangeLabel>
              {t("profile.change.lastName")}{" "}
              {t("profile.change.notNecessarily")}
            </ChangeLabel>
            <ChangeInput
              type="text"
              name="lastName"
              placeholder={t("profile.change.placeholder")}
              className={errors.lastName && touched.lastName && "invalid"}
              maxLength={50}
              onFocus={() => setIsRegionsSelectOpen(false)}
              {...getFieldProps("lastName")}
            />
            {errors.lastName && touched.lastName && (
              <ChangeErrorText>{t(errors.lastName)}</ChangeErrorText>
            )}
          </ChangeInputWrap>

          <ChangeInputWrap>
            <ChangeLabel>{t("profile.change.email")}</ChangeLabel>
            <ChangeInput
              type="email"
              name="email"
              disabled
              placeholder={t("profile.change.placeholder")}
              className={errors.email && touched.email && "invalid"}
              maxLength={128}
              onFocus={() => setIsRegionsSelectOpen(false)}
              {...getFieldProps("email")}
            />
            {errors.email && touched.email && (
              <ChangeErrorText>{t(errors.email)}</ChangeErrorText>
            )}
          </ChangeInputWrap>

          <ChangeInputWrap>
            <ChangeLabel>{t("profile.change.phone")}</ChangeLabel>
            <ChangeInput
              type="tel"
              name="phoneNumber"
              placeholder={t("profile.change.placeholder")}
              className={errors.phoneNumber && touched.phoneNumber && "invalid"}
              maxLength={13}
              onFocus={() => setIsRegionsSelectOpen(false)}
              autoComplete="off"
              {...getFieldProps("phoneNumber")}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <ChangeErrorText>{t(errors.phoneNumber)}</ChangeErrorText>
            )}
          </ChangeInputWrap>
          <ChangeInputWrap>
            <ChangeLabel>
              {t("profile.change.region")} {t("profile.change.notNecessarily")}
            </ChangeLabel>
            <ChangeInput
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
          </ChangeInputWrap>

          <ChangeInputWrap>
            <ChangeLabel>
              {t("profile.change.organization")}{" "}
              {t("profile.change.notNecessarily")}
            </ChangeLabel>
            <ChangeInput
              type="text"
              name="organization"
              placeholder={t("profile.change.placeholder")}
              className={
                errors.organization && touched.organization && "invalid"
              }
              maxLength={200}
              onFocus={() => setIsRegionsSelectOpen(false)}
              {...getFieldProps("organization")}
            />
            {errors.organization && touched.organization && (
              <ChangeErrorText>{t(errors.organization)}</ChangeErrorText>
            )}
          </ChangeInputWrap>

          <ChangeInputWrap>
            <ChangeLabel>
              {t("profile.change.comment")} {t("profile.change.notNecessarily")}
            </ChangeLabel>
            <ChangeArea
              name="comment"
              placeholder={t("profile.change.placeholder")}
              className={errors.comment && touched.comment && "invalid"}
              maxLength={350}
              onFocus={() => setIsRegionsSelectOpen(false)}
              {...getFieldProps("comment")}
            />
            {errors.comment && touched.comment && (
              <ChangeErrorText>{t(errors.comment)}</ChangeErrorText>
            )}
          </ChangeInputWrap>
        </InputsCont>
        <ChangePasswordLink
          to="/profile/changePassword"
          state={{ from: location }}
          className="accent-text"
        >
          {t("profile.change.password")}
        </ChangePasswordLink>

        <ChangeBtnWrap>
          <ChangeSubmitBtn
            type="submit"
            className="accent-button"
            disabled={Object.keys(errors).length > 0}
          >
            {isSubmitting ? (
              <SmallSpinner width={20} height={20} />
            ) : (
              t("profile.change.save")
            )}
          </ChangeSubmitBtn>
          <ChangeCancelBtn type="button" onClick={openModalToggle}>
            {t("profile.change.cancel")}
          </ChangeCancelBtn>
        </ChangeBtnWrap>
      </ChangeFormEl>
      <WarningModal isOpen={isModalOpen} onClose={openModalToggle} />
    </>
  );
};

export default ChangeForm;
