import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setNotificationAsRead } from "api/notifications";
import { REQUEST_TYPE } from "constants";
import { formatDate, formatTime } from "helpers";
import sprite from "assets/icons/sprite.svg";
import RightArrow from "assets/icons/RightArrow";
import {
  MoreDetailsLink,
  NotificationBlock,
  TimeBlock,
} from "./Notification.styled";

const Notification = ({
  closeToaster,
  iconId,
  className,
  title,
  text,
  variant,
  showDetails,
  time,
  data = {},
  unreadIds = [],
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isLanguageUK = i18n.language === "uk";
  const {
    id,
    createdAt,
    helpRequestType,
    isRead,
    notificationText: {
      notificationTextEn,
      notificationTextUa,
      notificationTitleEn,
      notificationTitleUa,
    },
  } = data;

  useEffect(() => {
    const makeNotificationRead = async (id) => {
      await setNotificationAsRead(id);
    };

    if (unreadIds.length > 0) {
      unreadIds.forEach(async (elId) => {
        const element = id === Number(elId);

        if (element && !isRead) {
          await makeNotificationRead(id);
        }
      });
    }
  }, [unreadIds, data, id, isRead]);

  return (
    <>
      {time && (
        <TimeBlock>
          <p>{formatDate(createdAt)}</p>
          <time>{formatTime(createdAt)}</time>
        </TimeBlock>
      )}
      <NotificationBlock className={className} $variant={variant}>
        {closeToaster && (
          <button
            className="close-notification-btn"
            type="button"
            onClick={closeToaster}
          >
            <svg
              id="close-notification"
              width={20}
              height={20}
              className={className}
            >
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        )}
        <div>
          <svg width={24} height={24} className={className}>
            <use href={`${sprite}#icon-${iconId}`}></use>
          </svg>
          <h4 className={className}>
            {data
              ? isLanguageUK
                ? notificationTitleUa
                : notificationTitleEn
              : t(title)}
          </h4>
        </div>
        {data ? (
          <p>{isLanguageUK ? notificationTextUa : notificationTextEn}</p>
        ) : (
          <p>{t(text)}</p>
        )}
        {showDetails && (
          <MoreDetailsLink
            state={{ from: location }}
            to={
              helpRequestType === REQUEST_TYPE
                ? notificationTextUa.includes("Мої відгуки")
                  ? "/profile/responses/provide"
                  : "/profile/requests/need"
                : "/profile/requests/provide"
            }
          >
            {t("profile.notifications.detailsBtn")}
            <RightArrow />
          </MoreDetailsLink>
        )}
      </NotificationBlock>
    </>
  );
};

export default Notification;
