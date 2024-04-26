import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DesktopWrap,
  MobTabWrap,
  ProfileScrollContainer,
} from "./MyTasks.styled";
import ProfileHeader from "../../ProfileHeader/ProfileHeader";
import { ProfileH2 } from "../../MyProfile/MyProfile.styled";
import { PersonalInfoText } from "../../MyPersonalInfo/MyPersonalInfo.styled";
import { SubPagesSection } from "./MyTasks.styled";
import ProfileNavigation from "../../ProfileNavigation/ProfileNavigation";

const MyTasks = () => {
  const location = useLocation();

  const { t } = useTranslation();

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
          <Outlet />
        </ProfileScrollContainer>
      </SubPagesSection>
    </>
  );
};

export default MyTasks;
