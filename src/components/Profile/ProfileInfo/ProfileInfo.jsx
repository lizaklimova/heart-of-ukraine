import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RedTrashIcon } from "src/assets/icons";
import {
  selectEmail,
  selectUserComment,
  selectUserFistName,
  selectUserLastName,
  selectUserNumber,
  selectUserOrganization,
  selectUserRegion,
} from "../../../redux/auth/authSelectors";
import {
  InfoBtnsWrap,
  InfoItem,
  InfoList,
  InfoName,
  InfoCont,
  InfoValue,
  ItemCont,
  RemoveAccBtn,
  RemoveBtnText,
  SubmitBtn,
} from "./ProfileInfo.styled";

const ProfileInfo = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const userFirstName = useSelector(selectUserFistName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectEmail);
  const userNumber = useSelector(selectUserNumber);
  const userRegion = useSelector(selectUserRegion);
  const userOrganization = useSelector(selectUserOrganization);
  const userComment = useSelector(selectUserComment);

  const textPlaceholder = t("profile.personal.placeholder");

  const region = () => {
    if (!userRegion) {
      return;
    }

    const regionName =
      i18n.language === "uk"
        ? userRegion?.regionUa?.toLowerCase()
        : userRegion?.regionEn?.toLowerCase();

    const regionUpperName =
      regionName.charAt(0).toUpperCase() + regionName.slice(1);

    if (["крим", "crimea"].includes(regionUpperName.toLowerCase())) {
      return regionUpperName;
    }

    return `${regionUpperName} ${t("profile.personal.regionName")}`;
  };

  return (
    <InfoCont>
      <InfoList>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.name")}</InfoName>
            <InfoValue>
              {userFirstName ? userFirstName : textPlaceholder}
            </InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.surname")}</InfoName>
            <InfoValue>
              {userLastName ? userLastName : textPlaceholder}
            </InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.phone")}</InfoName>
            <InfoValue>{userNumber ? userNumber : textPlaceholder}</InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.email")}</InfoName>
            <InfoValue>{userEmail ? userEmail : textPlaceholder}</InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.region")}</InfoName>
            <InfoValue>{userRegion ? region() : textPlaceholder}</InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.organization")}</InfoName>
            <InfoValue>
              {userOrganization ? userOrganization : textPlaceholder}
            </InfoValue>
          </ItemCont>
        </InfoItem>
        <InfoItem>
          <ItemCont>
            <InfoName>{t("profile.personal.about")}</InfoName>
            <InfoValue>{userComment ? userComment : textPlaceholder}</InfoValue>
          </ItemCont>
        </InfoItem>
      </InfoList>
      <InfoBtnsWrap>
        <SubmitBtn
          to="/profile/change"
          state={{ from: location }}
          className="accent-button"
        >
          {t("profile.personal.change")}
        </SubmitBtn>
        <RemoveAccBtn className="remove-accent-text">
          <RedTrashIcon />
          <RemoveBtnText>{t("profile.personal.delete")}</RemoveBtnText>
        </RemoveAccBtn>
      </InfoBtnsWrap>
    </InfoCont>
  );
};

export default ProfileInfo;
