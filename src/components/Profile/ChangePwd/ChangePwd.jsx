import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { changePassword } from "src/api";
import { CHANGE_PWD_INIT_VALUES } from "src/constants";
import { changePasswordSchema } from "src/schemas";
import ProfileNavigation from "../ProfileNavigation";
import PwdRequirements from "src/components/Auth/PwdRequirements";
import SmallSpinner from "src/components/Loaders/SmallSpinner";
import ProfileHeader from "../ProfileHeader";
import ShowPasswordBtn from "src/components/Auth/ShowPasswordBtn";
import BackHomeBtn from "src/components/Auth/BackHomeBtn";
import Notification from "src/components/Notification";
import { MainContainer } from "src/layouts/MainContainer.styled";
import {
  ResetPwdBlock,
  ResetPwdLink,
} from "src/components/Auth/SignInForm/SignInForm.styled";
import {
  DesktopWrap,
  MobTabWrap,
  ProfileScrollContainer,
  SubPagesSection,
} from "../Tabs/MyTasks/MyTasks.styled";
import { ProfileH2 } from "../MyProfile/MyProfile.styled";
import { PersonalInfoText } from "../MyPersonalInfo/MyPersonalInfo.styled";
import {
  ChangeForm,
  ChangeLabel,
  ChangePwdSection,
  TitleText,
  ChangeText,
  SaveChangesBtn,
} from "./ChangePwd.styled";
import { AuthErrorText } from "src/components/Auth/CommonAuth.styled";

const ChangePwd = () => {
  const [isOldPwdShown, setIsOldPwdShownn] = useState(false);
  const [isNewPwdShown, setIsNewPwdShownn] = useState(false);
  const [isConfirmNewPwdShown, setIsConfirmNewPwdShown] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const { t, i18n } = useTranslation();

  const onSubmit = async (
    { oldPassword, newPassword, repeatNewPassword },
    actions
  ) => {
    const formData = { oldPassword, newPassword, repeatNewPassword };

    const isFormDataValid = await changePasswordSchema.isValid(formData);
    if (!isFormDataValid) return;

    const response = await changePassword(formData);

    if (response?.response?.data) {
      const { errorText } = response?.response?.data;
      setSubmitError(
        i18n.language === "uk" ? errorText.uaErrorText : errorText.enErrorText
      );
    } else {
      toast.custom((t) => (
        <Notification
          closeToaster={() => toast.remove(t.id)}
          iconId={"notify-bell"}
          title={"profile.changePassword.successNotification"}
          className={"info"}
        />
      ));
      setSubmitError(null);
      actions.resetForm();
    }
  };

  const { errors, touched, values, getFieldProps, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: CHANGE_PWD_INIT_VALUES,
      validationSchema: changePasswordSchema,
      onSubmit,
    });

  return (
    <>
      <DesktopWrap>
        <ProfileHeader classN="other" />
        <ProfileH2>{t("profile.myProfile")}</ProfileH2>
        <PersonalInfoText>
          {t(`profile.nav.${location?.pathname.split("/")[2]}`)}
        </PersonalInfoText>
      </DesktopWrap>
      <SubPagesSection>
        <ProfileScrollContainer>
          <MobTabWrap>
            <ProfileNavigation />
          </MobTabWrap>

          <ChangePwdSection>
            <MainContainer>
              <BackHomeBtn
                variant="changePwd"
                to="/profile/change"
                text="profile.changePassword.backToEdit"
              />
              <TitleText>{t("profile.changePwd")}</TitleText>
              <ChangeText>{t("profile.changePassword.title")}</ChangeText>

              <ChangeForm onSubmit={handleSubmit}>
                <ChangeLabel>
                  {t("profile.changePassword.currentPwd")}
                  <input
                    name="currentPassword"
                    placeholder={t("profile.change.placeholder")}
                    type={isOldPwdShown ? "text" : "password"}
                    {...getFieldProps("oldPassword")}
                  />
                  <ShowPasswordBtn
                    isPwdShown={isOldPwdShown}
                    setPwdShown={setIsOldPwdShownn}
                    variant="changePwd"
                  />
                  {errors.currentPassword && touched.currentPassword && (
                    <AuthErrorText>{t(errors.currentPassword)}</AuthErrorText>
                  )}
                </ChangeLabel>

                <ChangeLabel>
                  {t("profile.changePassword.enterNewPwd")}
                  <input
                    id="newPassword"
                    name="newPassword"
                    placeholder={t("profile.change.placeholder")}
                    type={isNewPwdShown ? "text" : "password"}
                    {...getFieldProps("newPassword")}
                  />
                  <PwdRequirements
                    error={errors.newPassword}
                    touched={touched.newPassword}
                    value={values.newPassword}
                    variant="changePwd"
                  />
                  <ShowPasswordBtn
                    isPwdShown={isNewPwdShown}
                    setPwdShown={setIsNewPwdShownn}
                    variant="changePwd"
                  />
                </ChangeLabel>

                <ChangeLabel>
                  {t("profile.changePassword.enterNewPwdOneMoreTime")}
                  <input
                    name="repeatNewPassword"
                    placeholder={t("profile.change.placeholder")}
                    type={isConfirmNewPwdShown ? "text" : "password"}
                    {...getFieldProps("repeatNewPassword")}
                  />
                  <ShowPasswordBtn
                    isPwdShown={isConfirmNewPwdShown}
                    setPwdShown={setIsConfirmNewPwdShown}
                    variant="changePwd"
                  />
                  {errors.repeatNewPassword && touched.repeatNewPassword && (
                    <AuthErrorText>{t(errors.repeatNewPassword)}</AuthErrorText>
                  )}

                  {submitError && <AuthErrorText>{submitError}</AuthErrorText>}
                </ChangeLabel>

                <ResetPwdBlock $variant="changePwd">
                  <p>{t("auth.forgotPassword")}</p>
                  <ResetPwdLink to="/auth/forgotpass">
                    {t("auth.reset")}
                  </ResetPwdLink>
                </ResetPwdBlock>

                <SaveChangesBtn
                  type="submit"
                  className="accent-button"
                  disabled={Object.keys(errors).length > 0}
                >
                  {isSubmitting ? (
                    <SmallSpinner width={20} height={20} />
                  ) : (
                    t("profile.changePassword.save")
                  )}
                </SaveChangesBtn>
              </ChangeForm>
            </MainContainer>
          </ChangePwdSection>
        </ProfileScrollContainer>
      </SubPagesSection>
    </>
  );
};

export default ChangePwd;
