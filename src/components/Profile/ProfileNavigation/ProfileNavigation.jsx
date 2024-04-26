import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { logoutThunk } from "../../../redux/auth/authOperations";
import NavigationItem from "./NavigationItem";
import sprite from "assets/icons/sprite.svg";
import {
  FeedbackIcon,
  InfoIcon,
  LogoutIcon,
  NotifyIcon,
  ProfileIcon,
  RequestsIcon,
} from "assets/icons";
import {
  NavCont,
  NavigationWrap,
  ProfileOptionsList,
} from "./ProfileNavigation.styled";
import {
  ItemContentWrap,
  NavigateCompSvg,
  NavigateText,
  ProfileOptionsLink,
  SvgAndNameWrap,
} from "./NavigationItem/NavigationItem.styled";

const ProfileNavigation = ({ variant }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavCont $variant={variant}>
      <NavigationWrap>
        <ProfileOptionsList>
          <NavigationItem
            icon={ProfileIcon}
            text="profile.nav.personal"
            to="/personal"
            state={{ from: location }}
          />
          <NavigationItem
            icon={RequestsIcon}
            text="profile.nav.requests"
            to="/requests"
            state={{ from: location }}
          />
          <NavigationItem
            icon={FeedbackIcon}
            text="profile.nav.responses"
            to="/responses"
            state={{ from: location }}
          />
          <NavigationItem
            icon={NotifyIcon}
            text="profile.nav.notifications"
            to="/notifications"
            state={{ from: location }}
          />
          <NavigationItem
            icon={InfoIcon}
            text="profile.nav.support"
            to="/support"
            state={{ from: location }}
          />
        </ProfileOptionsList>
        <button
          type="button"
          onClick={() => {
            navigate("/");
            dispatch(logoutThunk());
          }}
        >
          <ItemContentWrap>
            <SvgAndNameWrap>
              <LogoutIcon />
              <NavigateText>{t("profile.nav.logout")}</NavigateText>
            </SvgAndNameWrap>
            <NavigateCompSvg>
              <use href={`${sprite}#icon-right-arrow`} />
            </NavigateCompSvg>
          </ItemContentWrap>
        </button>
      </NavigationWrap>
    </NavCont>
  );
};

export default ProfileNavigation;
