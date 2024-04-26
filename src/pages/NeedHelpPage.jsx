import { useState, useEffect } from "react";
import { OFFER_TYPE, REQUEST_TYPE } from "constants";
import paginationHOC from "hocs/paginationHOC";
import { getAllRequests, getFilteredRequests } from "api";
import Tasks from "components/Tasks";

const NeedHelpPage = () => {
  const [areItemsFiltered, setAreItemsFiltered] = useState(false);
  const [areFiltersDeleted, setAreFiltersDeleted] = useState(false);

  useEffect(() => {
    localStorage.removeItem("updateDetails");
    localStorage.setItem("location", "/needHelp");
  }, []);

  const fetchFn =
    areItemsFiltered && !areFiltersDeleted
      ? getFilteredRequests
      : getAllRequests;

  const TasksWithPagination = paginationHOC(Tasks);

  return (
    <TasksWithPagination
      fetchFn={fetchFn}
      smoothScroll={true}
      limits={{
        tab: 8,
        mob: 4,
      }}
      variant={REQUEST_TYPE}
      cards={OFFER_TYPE}
      areItemsFiltered={areItemsFiltered}
      setAreItemsFiltered={setAreItemsFiltered}
      setAreFiltersDeleted={setAreFiltersDeleted}
      title="tasks.needHelpTitle"
      subtitle="tasks.offersForYou"
      button="tasks.createRequest"
      target="tasks-list"
    />
  );
};

export default NeedHelpPage;
