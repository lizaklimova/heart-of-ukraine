import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmptyMsg from "components/Profile/EmptyMsg";
import Card from "components/Tasks/Card";
import { MainContainer } from "layouts/MainContainer.styled";
import Pagination from "components/Pagination";
import {
  ProfileTasksNav,
  ProfileTasksNavLink,
  TasksList,
} from "../MyTasks.styled";
import { ScrollWrap } from "../MyResponses/MyResponses.styled";

const RequestTab = ({ data, currentPage, totalPages, setPage }) => {
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
          <ProfileTasksNavLink to="/profile/requests/need">
            {t("profile.tasks.need")}
          </ProfileTasksNavLink>
          <ProfileTasksNavLink to="/profile/requests/provide">
            {t("profile.tasks.provide")}
          </ProfileTasksNavLink>
        </ProfileTasksNav>

        <TasksList id="profile-requests-list">
          {data?.content?.length === 0 ? (
            <EmptyMsg
              text={
                location?.pathname?.includes("need")
                  ? "emptyOwnRequests"
                  : "emptyOwnOffers"
              }
            />
          ) : (
            data?.content?.map((task) => (
              <Card
                key={task.id}
                requestData={task}
                status
                variant="requests"
                desktop={window.innerWidth >= 1440}
                setExecutorsDetails={setExecutorsDetails}
                executorsDetails={executorsDetails}
                isProvideOfHelp={location?.pathname?.includes("provide")}
              />
            ))
          )}
        </TasksList>

        <Pagination
          currentPage={currentPage + 1}
          totalPages={totalPages}
          setPage={setPage}
          variant="tasks"
          request
          scrollToTop={scrollToTop}
        />
      </ScrollWrap>
    </MainContainer>
  );
};

export default RequestTab;
