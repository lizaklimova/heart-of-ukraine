import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectUserAvatar,
} from "../../redux/auth/authSelectors";
import { selectAllUnreadNotifications } from "../../redux/notifications/notificationSelectors";
import { getAllUnreadNotificationsThunk } from "../../redux/notifications/notificationOperations";
import { getImages } from "api";
import { smoothScrollToTarget } from "helpers";
import SideMenu from "components/Header/SideMenu";
import LangSwitcher from "components/Header/LangSwitcher";
import { BurgerMenuIcon, LogoIcon, PersonIcon } from "assets/icons";
import { useWindowWidth } from "hooks/useWindowWidth";
import {
  HeaderButton,
  HeaderWrap,
  LogoLink,
  LogoName,
  NavigateLink,
  NavWrap,
  UserMenu,
  BurgerBtn,
  BurgerWrap,
  EnterLink,
  AvatarHeader,
} from "./Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [sectionIdToScroll, setSectionIdToScroll] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);

  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userAvatar = useSelector(selectUserAvatar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    dispatch(getAllUnreadNotificationsThunk());
  }, [dispatch]);

  useEffect(() => {
    const getUserAvatar = async () => {
      const result = await getImages(userAvatar);
      setUserAvatarUrl(result);
    };

    if (userAvatar) {
      getUserAvatar();
    }
  }, [setUserAvatarUrl, userAvatar]);

  useEffect(() => {
    if (shouldScroll) {
      const section = document.getElementById(sectionIdToScroll);
      if (section) {
        smoothScrollToTarget(sectionIdToScroll);
      }
      setShouldScroll(false);
      setSectionIdToScroll("");
    }
  }, [shouldScroll, sectionIdToScroll]);

  const onClickNavigate = (sectionId, path) => {
    navigate(path);
    setShouldScroll(true);
    setSectionIdToScroll(sectionId);
  };

  const onClickMenuBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const unreadNotifications = useSelector(selectAllUnreadNotifications);

  return (
    <HeaderWrap id="header">
      <LogoLink to="/" aria-label="Heart of Ukraine website logo">
        {windowWidth >= 1440 ? (
          <LogoIcon width={76} height={74} />
        ) : (
          <LogoIcon width={42} height={42} />
        )}
        <LogoName>{t("logo")}</LogoName>
      </LogoLink>
      <NavWrap>
        <NavigateLink onClick={() => onClickNavigate("about", "/")}>
          {t("header.about")}
        </NavigateLink>
        <NavigateLink onClick={() => onClickNavigate("news", "/")}>
          {t("header.news")}
        </NavigateLink>
        <NavigateLink onClick={() => onClickNavigate("footer", "/")}>
          {t("header.contacts")}
        </NavigateLink>
      </NavWrap>
      <UserMenu>
        {isLoggedIn ? (
          <EnterLink to="/profile/change">
            <AvatarHeader className="header">
              {userAvatarUrl ? (
                <img
                  src={`data:image/jpeg;charset=utf-8;base64,${userAvatarUrl}`}
                  alt="user avatar"
                />
              ) : (
                <PersonIcon width={22} height={20} />
              )}
            </AvatarHeader>
          </EnterLink>
        ) : (
          <EnterLink to="/auth/login">
            <HeaderButton className="accent-button">
              {t("sideMenu.signIn")}
            </HeaderButton>
          </EnterLink>
        )}
        <LangSwitcher classN={"header"} />
        <BurgerWrap>
          <BurgerBtn onClick={onClickMenuBtn}>
            <BurgerMenuIcon />
          </BurgerBtn>
          {unreadNotifications &&
            unreadNotifications?.length > 0 &&
            isLoggedIn && (
              <span onClick={onClickMenuBtn}>{unreadNotifications.length}</span>
            )}
          <SideMenu
            isOpen={isOpen}
            onClose={handleClose}
            onClickNavigate={onClickNavigate}
            notifications={unreadNotifications}
          />
        </BurgerWrap>
      </UserMenu>
    </HeaderWrap>
  );
};

export default Header;
