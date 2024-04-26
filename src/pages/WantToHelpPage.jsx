import { useEffect, useState } from "react";
import { OFFER_TYPE, REQUEST_TYPE } from "constants";
import paginationHOC from "src/hocs/paginationHOC";
import { getAllRequests, getFilteredRequests } from "api";
import Tasks from "components/Tasks";

const WantToHelpPage = () => {
  const [areItemsFiltered, setAreItemsFiltered] = useState(false);
  const [areFiltersDeleted, setAreFiltersDeleted] = useState(false);

  useEffect(() => {
    localStorage.removeItem("updateDetails");
    localStorage.setItem("location", "/wantToHelp");
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
      variant={OFFER_TYPE}
      cards={REQUEST_TYPE}
      areItemsFiltered={areItemsFiltered}
      setAreItemsFiltered={setAreItemsFiltered}
      setAreFiltersDeleted={setAreFiltersDeleted}
      title="tasks.wantToHelpTitle"
      subtitle="tasks.requestsForYou"
      button="tasks.createOffer"
      target="tasks-list"
    />
  );
};

export default WantToHelpPage;
