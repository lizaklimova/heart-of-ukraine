import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import heartBoxPic from "src/assets/images/tasks/emptyTasks.png";
import { NotFoundTasksSection } from "./NoFoundTasksMsg.styled";
import { MainContainer } from "src/layouts/MainContainer.styled";

const NoFoundTasksMsg = ({ className }) => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <NotFoundTasksSection>
      <MainContainer>
        <img src={heartBoxPic} alt="no tasks found" width={300} height={330} />
        <h5>{t("tasks.notFoundTitle")}</h5>
        <p className={className}>
          {t("tasks.notFoundText")}
          <Link
            to={"/createTask"}
            state={{ from: location }}
            className="accent-text"
          >
            {t(
              location?.pathname === "/needHelp"
                ? "tasks.createNewRequest"
                : "tasks.createNewOffer"
            )}
          </Link>
        </p>
      </MainContainer>
    </NotFoundTasksSection>
  );
};

export default NoFoundTasksMsg;
