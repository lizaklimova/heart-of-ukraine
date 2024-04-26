import { useTranslation } from "react-i18next";
import emptyPic from "assets/images/profile/empty.png";
import { EmptyBlock, EmptyText, GoToSearchLink } from "./EmptyMsg.styled";
import { smoothScrollToTarget } from "helpers";

const EmptyMsg = ({ text }) => {
  const { t } = useTranslation();

  return (
    <EmptyBlock>
      <EmptyText>{t(`profile.tasks.${text}`)}</EmptyText>
      <img src={emptyPic} alt="No tasks" width={500} height={700} />
      <GoToSearchLink
        to={"/#joinUs"}
        className="accent-button"
        onClick={() => smoothScrollToTarget("joinUs")}
      >
        {t("profile.tasks.goToSearch")}
      </GoToSearchLink>
    </EmptyBlock>
  );
};

export default EmptyMsg;
