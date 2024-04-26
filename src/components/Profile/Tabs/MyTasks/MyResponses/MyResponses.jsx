import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmptyMsg from "components/Profile/EmptyMsg";
import Card from "components/Tasks/Card";
import Pagination from "components/Pagination";
import { MainContainer } from "layouts/MainContainer.styled";
import {
  ProfileTasksNav,
  ProfileTasksNavLink,
  TasksList,
} from "../MyTasks.styled";
import { ScrollWrap } from "./MyResponses.styled";

const MyResponses = ({ data, currentPage, totalPages, setPage }) => {
  const [executorsDetails, setExecutorsDetails] = useState([]);

  const { t } = useTranslation();
  const location = useLocation();

  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  const scrollToTop = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = 0;
    }
  };
  return (
    <MainContainer>
      <ScrollWrap ref={containerRef}>
        <ProfileTasksNav>
          <ProfileTasksNavLink to="/profile/responses/need">
            {t("profile.tasks.need")}
          </ProfileTasksNavLink>
          <ProfileTasksNavLink to="/profile/responses/provide">
            {t("profile.tasks.provide")}
          </ProfileTasksNavLink>
        </ProfileTasksNav>

        <TasksList id="profile-task-list">
          {data?.content?.length === 0 ? (
            <EmptyMsg text={"emptyOffersRequests"} />
          ) : (
            data?.content?.map((task) => (
              <Card
                key={task.id}
                requestData={task}
                status
                responses
                variant="responses"
                pathname={location?.pathname}
                desktop={window.innerWidth >= 1440}
                executorsDetails={executorsDetails}
                setExecutorsDetails={setExecutorsDetails}
              />
            ))
          )}
        </TasksList>

        <Pagination
          currentPage={currentPage + 1}
          totalPages={totalPages}
          setPage={setPage}
          variant="tasks"
          scrollToTop={scrollToTop}
        />
      </ScrollWrap>
    </MainContainer>
  );
};

export default MyResponses;
