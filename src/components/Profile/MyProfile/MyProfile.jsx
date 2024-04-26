import { useTranslation } from "react-i18next";
import ProfileStatistic from "../ProfileStatistic";
import ProfilePersonHeader from "../ProfilePersonHeader";
import { ProfileH2 } from "./MyProfile.styled";
// import ProfileNavigation from "../ProfileNavigation";
// import { DesktopWrap } from "../Tabs/MyTasks/MyTasks.styled";

const MyProfile = ({ classN }) => {
  const { t } = useTranslation();

  const showHeaderAndStatistic = classN !== "change";

  return (
    <>
      <ProfileH2>{t("profile.myProfile")}</ProfileH2>
      {showHeaderAndStatistic && <ProfilePersonHeader />}
      {showHeaderAndStatistic && <ProfileStatistic />}
      {/* <DesktopWrap>
        <ProfileNavigation />
      </DesktopWrap> */}
    </>
  );
};

export default MyProfile;
