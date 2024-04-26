import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import ProfileNavigation from "../ProfileNavigation";
import ProfileHeader from "../ProfileHeader";
import {
  DesktopWrap,
  MobTabWrap,
  ProfileScrollContainer,
  SubPagesSection,
} from "../Tabs/MyTasks/MyTasks.styled";
import { ProfileH2 } from "../MyProfile/MyProfile.styled";
import { PersonalInfoText } from "../MyPersonalInfo/MyPersonalInfo.styled";
import { MainContainer } from "layouts/MainContainer.styled";
import {
  SuccessfullySentBlock,
  SupportForm,
  SupportSection,
  SupportSubmitBtn,
} from "./SupportSubPage.styled";
import {
  ModalLink,
  ModalPic,
  ModalTitle,
} from "components/Tasks/SuccessModal/SuccessModal.styled";
import { ModalText } from "components/Tasks/ConfirmationModal/ConfirmationModal.styled";

const SupportSubPage = () => {
  const [isFieldTouched, setIsFieldTouched] = useState(false);
  const [shouldHideForm, setShouldHideForm] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const handleSupportSubmit = (event) => {
    event.preventDefault();

    event.currentTarget.reset();
    setShouldHideForm(true);
  };

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
          <SupportSection>
            <MainContainer>
              {!shouldHideForm ? (
                <>
                  <h3>{t("profile.support.text")}</h3>
                  <SupportForm onSubmit={handleSupportSubmit}>
                    <label>
                      {t("profile.support.label")}
                      <textarea
                        name="comment"
                        placeholder={t("profile.support.placeholder")}
                        maxLength={9000}
                        onChange={(event) =>
                          setIsFieldTouched(
                            event.target.value.trim().length > 30
                          )
                        }
                      ></textarea>
                    </label>

                    <p>
                      {t("profile.support.msg1")}{" "}
                      <span>piadrumka@gmail.com.</span>{" "}
                      {t("profile.support.msg2")}
                    </p>
                    <SupportSubmitBtn
                      type="submit"
                      className="accent-button"
                      disabled={!isFieldTouched}
                    >
                      {t("profile.support.send")}
                    </SupportSubmitBtn>
                  </SupportForm>
                </>
              ) : (
                <SuccessfullySentBlock>
                  <ModalTitle>
                    {t("profile.support.successSentTitle")}
                  </ModalTitle>
                  <ModalText>{t("profile.support.successSentText")}</ModalText>
                  <ModalPic width={177} height={177}>
                    <use href={`${sprite}#icon-success`}></use>
                  </ModalPic>
                  <ModalLink
                    to="/"
                    className="accent-button"
                    state={{ from: location }}
                  >
                    {t("createTask.successWindow.backHome")}
                  </ModalLink>
                </SuccessfullySentBlock>
              )}
            </MainContainer>
          </SupportSection>
        </ProfileScrollContainer>
      </SubPagesSection>
    </>
  );
};

export default SupportSubPage;
