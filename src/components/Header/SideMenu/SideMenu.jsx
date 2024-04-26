import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectUserFistName,
  selectUserLastName,
  selectEmail,
  selectUserAvatar,
} from "../../../redux/auth/authSelectors";
import { getImages } from "api";
import LangSwitcher from "components/Header/LangSwitcher";
import { BurgerMenuIcon, PersonIcon } from "assets/icons";
import {
  AvatarHeader,
  BurgerBtn,
  HeaderButton,
} from "components/Header/Header.styled";
import {
  AuthButtonsWrap,
  AvatarNameWrap,
  BurgerHeaderCont,
  MenuWrapper,
  NavMenu,
  NavMenuLink,
  Overlay,
  PersonEmail,
  PersonInfoWrap,
  PersonName,
  ProfileOptionsALink,
  ProfileOptionsItem,
  ProfileOptionsLink,
  ProfileOptionsList,
  RegisterButton,
} from "./SideMenu.styled";

const SideMenu = ({ isOpen, onClose, onClickNavigate, notifications }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);

  const location = useLocation();
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userFirstName = useSelector(selectUserFistName);
  const userLastName = useSelector(selectUserLastName);
  const userEmail = useSelector(selectEmail);
  const userAvatar = useSelector(selectUserAvatar);

  useEffect(() => {
    const getUserAvatar = async () => {
      const result = await getImages(userAvatar);
      setUserAvatarUrl(result);
    };

    if (userAvatar) {
      getUserAvatar();
    }
  }, [setUserAvatarUrl]);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(
    (sectionId, path) => {
      setMenuIsOpen(false);
      onClose();
      if (typeof sectionId === "string" && typeof path === "string") {
        onClickNavigate(sectionId, path);
      }
    },
    [onClickNavigate, onClose]
  );

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  const handleEscKey = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    if (menuIsOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [menuIsOpen, handleEscKey]);

  return (
    <>
      {menuIsOpen && <Overlay onClick={handleBackdropClick}></Overlay>}
      <MenuWrapper className={menuIsOpen ? "shown" : ""}>
        <BurgerHeaderCont>
          <LangSwitcher />
          <BurgerBtn onClick={closeMenu}>
            <BurgerMenuIcon />
            {notifications && notifications?.length > 0 && isLoggedIn && (
              <span onClick={closeMenu}>
                {notifications?.filter((el) => el.isRead === false).length}
              </span>
            )}
          </BurgerBtn>
        </BurgerHeaderCont>
        {isLoggedIn ? (
          <AvatarNameWrap to="/profile/personal" onClick={closeMenu}>
            <AvatarHeader>
              {userAvatarUrl ? (
                <img
                  src={`data:image/jpeg;charset=utf-8;base64,${userAvatarUrl}`}
                  alt="user avatar"
                />
              ) : (
                <PersonIcon width={29} height={27} />
              )}
            </AvatarHeader>
            <PersonInfoWrap>
              <PersonName>
                {userFirstName} {userLastName}
              </PersonName>
              <PersonEmail>{userEmail}</PersonEmail>
            </PersonInfoWrap>
          </AvatarNameWrap>
        ) : (
          <AuthButtonsWrap>
            <Link to="/auth/login" onClick={closeMenu}>
              <HeaderButton className="accent-button">
                {t("sideMenu.signIn")}
              </HeaderButton>
            </Link>
            <Link to="/auth/register" onClick={closeMenu}>
              <RegisterButton>{t("sideMenu.signUp")}</RegisterButton>
            </Link>
          </AuthButtonsWrap>
        )}
        <NavMenu>
          {isLoggedIn && (
            <>
              <NavMenuLink
                to={isWideScreen ? "/profile/personal" : "/profile"}
                onClick={closeMenu}
              >
                {t("sideMenu.myProfile")}
              </NavMenuLink>
              <ProfileOptionsList>
                <ProfileOptionsItem>
                  <ProfileOptionsLink
                    to="/profile/personal"
                    state={{ from: location }}
                    onClick={closeMenu}
                  >
                    {t("sideMenu.personalInfo")}
                  </ProfileOptionsLink>
                </ProfileOptionsItem>
                <ProfileOptionsItem>
                  <ProfileOptionsLink
                    to="/profile/requests"
                    state={{ from: location }}
                    onClick={closeMenu}
                  >
                    {t("sideMenu.requests")}
                  </ProfileOptionsLink>
                </ProfileOptionsItem>
                <ProfileOptionsItem>
                  <ProfileOptionsLink
                    to="/profile/responses"
                    state={{ from: location }}
                    onClick={closeMenu}
                  >
                    {t("sideMenu.feedback")}
                  </ProfileOptionsLink>
                </ProfileOptionsItem>
                <ProfileOptionsItem>
                  <ProfileOptionsLink
                    to="/profile/notifications"
                    state={{ from: location }}
                    onClick={closeMenu}
                  >
                    {t("sideMenu.notify")}
                  </ProfileOptionsLink>
                </ProfileOptionsItem>
              </ProfileOptionsList>
            </>
          )}
          <NavMenuLink to="/" state={{ from: location }} onClick={closeMenu}>
            {t("sideMenu.mainPage")}
          </NavMenuLink>
          <ProfileOptionsList>
            <ProfileOptionsItem>
              <ProfileOptionsALink onClick={() => closeMenu("about", "/")}>
                {t("header.about")}
              </ProfileOptionsALink>
            </ProfileOptionsItem>
            <ProfileOptionsItem>
              <ProfileOptionsALink onClick={() => closeMenu("news", "/")}>
                {t("header.news")}
              </ProfileOptionsALink>
            </ProfileOptionsItem>
            <ProfileOptionsItem>
              <ProfileOptionsALink onClick={() => closeMenu("footer", "/")}>
                {t("header.contacts")}
              </ProfileOptionsALink>
            </ProfileOptionsItem>
          </ProfileOptionsList>
          <NavMenuLink to="/needHelp" onClick={closeMenu}>
            {t("sideMenu.needHelp")}
          </NavMenuLink>
          <NavMenuLink to="/wantToHelp" onClick={closeMenu}>
            {t("sideMenu.wantHelp")}
          </NavMenuLink>
          <NavMenuLink to="/profile/support" onClick={closeMenu}>
            {t("sideMenu.support")}
          </NavMenuLink>
        </NavMenu>
      </MenuWrapper>
    </>
  );
};

export default SideMenu;
