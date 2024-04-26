import { useRef } from "react";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import { statusesColors, STATUSES_VALUES } from "constants";
import { StatusBlock } from "./StatusTag.styled";

const StatusTag = ({ tag }) => {
  const { t } = useTranslation();
  const tagName = useRef(null);

  switch (tag) {
    case STATUSES_VALUES.active:
      tagName.current = "active";
      break;
    case STATUSES_VALUES.inProgress:
      tagName.current = "inProgress";
      break;
    case STATUSES_VALUES.inProcess:
      tagName.current = "inProcess";
      break;
    case STATUSES_VALUES.done:
      tagName.current = "done";
      break;
    case STATUSES_VALUES.canceled:
      tagName.current = "canceled";
      break;
  }

  return (
    <StatusBlock style={{ backgroundColor: statusesColors[tagName.current] }}>
      <svg width={14} height={14}>
        <use href={`${sprite}#icon-${tagName.current}`}></use>
      </svg>
      <p>{t(`profile.statuses.${tagName.current}`)}</p>
    </StatusBlock>
  );
};

export default StatusTag;
