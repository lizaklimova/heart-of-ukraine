import { useTranslation } from "react-i18next";
import { StatisticCount, StatisticItem, StatisticList, StatisticName } from "./ProfileStatistic.styled";

const ProfileStatistic = () => {
  const { t } = useTranslation();
  return (
    <StatisticList>
      <StatisticItem>
        <StatisticCount>190</StatisticCount>
        <StatisticName>{t("profile.processed")}</StatisticName>
      </StatisticItem>
      <StatisticItem>
        <StatisticCount>116</StatisticCount>
        <StatisticName>{t("profile.published")}</StatisticName>
      </StatisticItem>
    </StatisticList>
  );
}

export default ProfileStatistic