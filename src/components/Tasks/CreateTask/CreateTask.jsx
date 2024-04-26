import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MainContainer } from "src/layouts/MainContainer.styled";
import BackHomeBtn from "components/Auth/BackHomeBtn";
import { TasksSection, TasksTitle } from "../Tasks.styled";
import CreateTaskForm from "src/components/Tasks/CreateTask/CreateTaskForm";

const CreateTask = () => {
  const [categoriesSearch, setCategoriesSearch] = useState([]);
  const [regionsSearch, setRegionsSearch] = useState([]);

  const { t } = useTranslation();
  const location = useLocation();

  return (
    <TasksSection>
      <MainContainer>
        <BackHomeBtn
          variant="tasks"
          to={location?.state?.from}
          text="createTask.goToSearch"
        />

        <TasksTitle>
          {location?.state?.from?.pathname === "/needHelp"
            ? t("createTask.titleRequest")
            : t("createTask.titleOffer")}
        </TasksTitle>
        <CreateTaskForm
          setCategoriesFilters={setCategoriesSearch}
          setRegionsFilters={setRegionsSearch}
          categories={categoriesSearch}
          region={regionsSearch}
          variant={location?.state?.from?.pathname}
        />
      </MainContainer>
    </TasksSection>
  );
};

export default CreateTask;
