import { useTranslation } from "react-i18next";
import ChangeSection from "../ChangeSection";
import { ProfileH2 } from "../MyProfile/MyProfile.styled";
import {
  InfoWrap,
  PersonalInfoText,
} from "../MyPersonalInfo/MyPersonalInfo.styled";


const MyChangeInfo = () => {
    const { t } = useTranslation();

  return (
    <InfoWrap>
      <ProfileH2>{t("profile.myProfile")}</ProfileH2>
      <PersonalInfoText className="change">{t("profile.changeData")}</PersonalInfoText>
      <ChangeSection />
    </InfoWrap>
  );
}

export default MyChangeInfo