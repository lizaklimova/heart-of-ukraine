import { useLocation } from "react-router-dom";
import { getRequestsOfAuthor, getRequestsOfExecutor } from "src/api/requests";
import paginationHOC from "src/hocs/paginationHOC";
import MyResponses from "./MyTasks/MyResponses";
import RequestTab from "./MyTasks/RequestTab";
import { OFFER_TYPE, REQUEST_TYPE } from "src/constants";

const Tab = () => {
  const location = useLocation();

  const currentLocation = location?.pathname.includes("requests");
  const ListWithPagination = paginationHOC(
    currentLocation ? RequestTab : MyResponses
  );
  const fetchFn = currentLocation ? getRequestsOfAuthor : getRequestsOfExecutor;
  const variant = location?.pathname.includes("need")
    ? OFFER_TYPE
    : REQUEST_TYPE;

  const cards = location?.pathname.includes("requests")
    ? location?.pathname.includes("need")
      ? REQUEST_TYPE
      : OFFER_TYPE
    : location?.pathname.includes("need")
    ? OFFER_TYPE
    : REQUEST_TYPE;

  return (
    <ListWithPagination
      fetchFn={fetchFn}
      smoothScroll={true}
      limits={{
        tab: 3,
        mob: 4,
      }}
      variant={variant}
      cards={cards}
      target={currentLocation ? "profile-requests-list" : "profile-task-list"}
    />
  );
};

export default Tab;
