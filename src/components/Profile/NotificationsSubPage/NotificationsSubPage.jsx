import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAllNotificationsThunk } from "../../../redux/notifications/notificationOperations";
import { selectAllNotifications } from "../../../redux/notifications/notificationSelectors";
import { MainContainer } from "layouts/MainContainer.styled";
import { PersonalInfoText } from "../MyPersonalInfo/MyPersonalInfo.styled";
import { ProfileH2 } from "../MyProfile/MyProfile.styled";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import Notification from "components/Notification";
import {
  DesktopWrap,
  MobTabWrap,
  ProfileScrollContainer,
  SubPagesSection,
} from "../Tabs/MyTasks/MyTasks.styled";
import { ScrollWrap } from "../Tabs/MyTasks/MyResponses/MyResponses.styled";
import {
  NotificationsList,
  NotificationsSection,
} from "./NotificationsSubPage.styled";
import { NotificationItem } from "components/Notification/Notification.styled";

const NotificationsSubPage = () => {
  const [isNotificationDeleted, setIsNotificationDeleted] = useState(false);
  const [unreadIds, setUnreadIds] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const scrollWrapRef = useRef();

  useEffect(() => {
    dispatch(getAllNotificationsThunk());
    setIsNotificationDeleted(false);
  }, [dispatch, isNotificationDeleted]);

  const handleScroll = () => {
    const container = document.getElementById("scrollContainer");
    const elements = container.getElementsByClassName("notification-item");

    for (let el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setUnreadIds((prev) => {
          if (!prev.includes(el.dataset.id)) {
            return [...prev, el.dataset.id];
          }
          return prev;
        });
      }
    }
  };

  const throttle = (callback, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      callback(...args);
    };
  };

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 500);
    scrollWrapRef.current.addEventListener("scroll", throttledScroll);
    return () =>
      scrollWrapRef?.current?.removeEventListener("scroll", throttledScroll);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 500);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const notifications = useSelector(selectAllNotifications);

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
          <ScrollWrap
            ref={scrollWrapRef}
            id="scrollContainer"
            $variant="notifications"
          >
            <NotificationsSection>
              <MainContainer>
                <NotificationsList>
                  {notifications?.length > 0 &&
                    notifications?.map((element) => (
                      <NotificationItem
                        key={element.id}
                        data-id={element.id}
                        className="notification-item"
                      >
                        <Notification
                          data={element}
                          time
                          showDetails
                          variant="all"
                          unreadIds={unreadIds}
                          className={element.type.toLowerCase()}
                          setIsNotificationDeleted={setIsNotificationDeleted}
                          iconId={
                            element.type.toLowerCase() === "reminder"
                              ? "info"
                              : element.type.toLowerCase()
                          }
                        />
                      </NotificationItem>
                    ))}
                </NotificationsList>
              </MainContainer>
            </NotificationsSection>
          </ScrollWrap>
        </ProfileScrollContainer>
      </SubPagesSection>
    </>
  );
};

export default NotificationsSubPage;
