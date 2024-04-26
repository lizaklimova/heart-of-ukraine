import { useTranslation } from "react-i18next";
import { ProfileH2 } from "../MyProfile/MyProfile.styled";
import ProfileStatistic from "../ProfileStatistic";
import Avatar from "../ProfilePersonHeader/Avatar";
import { InfoWrap, PersonalInfoText } from "./MyPersonalInfo.styled";
import ProfileInfo from "../ProfileInfo";

const MyPersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <InfoWrap>
      <ProfileH2>{t("profile.myProfile")}</ProfileH2>
      <PersonalInfoText>{t("profile.personalInfo")}</PersonalInfoText>
      <Avatar classN="personal" />
      <ProfileStatistic />
      <ProfileInfo />
    </InfoWrap>
  );
};

export default MyPersonalInfo;
