import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { STATUSES_VALUES } from "constants";
import sprite from "assets/icons/sprite.svg";
import { MainContainer } from "layouts/MainContainer.styled";
import PlusIcon from "assets/icons/PlusIcon";
import Card from "./Card";
import BackHomeBtn from "../Auth/BackHomeBtn";
import FiltersForm from "./FiltersForm";
import Pagination from "../Pagination";
import ConfirmationModal from "./ConfirmationModal";
import SuccessModal from "./SuccessModal";
import NoFoundTasksMsg from "./NoFoundTasksMsg/NoFoundTasksMsg";
import {
  CreateOfferBlock,
  TitleFilterBlock,
  FiltersBlock,
  TasksList,
  TasksSection,
  TasksTitle,
} from "./Tasks.styled";
import { CreateTaskLink } from "./FiltersForm/FiltersForm.styled.jsx";

const Tasks = ({
  cards,
  currentPage,
  setPage,
  data,
  totalPages,
  setAreItemsFiltered,
  setAreFiltersDeleted,
  sortingOrder,
  setSortingOrder,
  title,
  subtitle,
  button,
}) => {
  const [categoriesSearch, setCategoriesSearch] = useState([]);
  const [regionsSearch, setRegionsSearch] = useState([]);
  const [defaultCheckedCategories, setDefaultCheckedCategories] = useState([]);
  const [defaultCheckedRegions, setDefaultCheckedRegions] = useState([]);
  const [requestId, setRequestId] = useState(null);
  const [isConfirmApplicationOpen, setIsConfirmApplicationOpen] =
    useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSuccessOfferModalOpen, setIsSuccessOfferModalOpen] = useState(false);
  // eslint-disable-next-line
  const [_, setAreTasksSorted] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get("additional") && window.innerWidth < 1440) {
      setPage(0);
      setAreItemsFiltered(true);
    }

    setDefaultCheckedCategories(categoriesSearch);
    setDefaultCheckedRegions(regionsSearch);

    if (searchParams.get("categories") || searchParams.get("regions")) {
      const categArr = [];
      const regArr = [];

      const checkedCategFilters = searchParams.get("categories").split(",");
      checkedCategFilters.forEach((fil) => categArr.push(fil));
      setDefaultCheckedCategories(categArr);
      setCategoriesSearch(categArr);

      const checkedRegFilters = searchParams.get("regions").split(",");
      checkedRegFilters.forEach((fil) => regArr.push(fil));
      setDefaultCheckedRegions(regArr);
      setRegionsSearch(regArr);
    }
  }, [
    searchParams,
    categoriesSearch,
    regionsSearch,
    setAreItemsFiltered,
    setPage,
  ]);

  const handleFiltersSearch = (event) => {
    event.preventDefault();
    setPage(0);

    setSearchParams({
      regions: regionsSearch.join(","),
      categories: categoriesSearch.join(","),
    });

    setAreItemsFiltered(true);
    setAreFiltersDeleted(false);
  };

  return (
    <TasksSection>
      <MainContainer>
        <BackHomeBtn variant="tasks" />

        <TasksTitle>{t(title)}</TasksTitle>

        <FiltersForm
          handleFiltersSearch={handleFiltersSearch}
          setCategoriesFilters={setCategoriesSearch}
          setRegionsFilters={setRegionsSearch}
          setAreFiltersDeleted={setAreFiltersDeleted}
          categoriesSearch={categoriesSearch}
          regionsSearch={regionsSearch}
          defaultCheckedCategories={defaultCheckedCategories}
          defaultCheckedRegions={defaultCheckedRegions}
        />

        <CreateOfferBlock>
          <TitleFilterBlock>
            <h3>{t(subtitle)}</h3>
            <FiltersBlock $isSorted={sortingOrder === "desc"}>
              <svg id="icon-filter" width={35} height={35}>
                <use href={`${sprite}#icon-filter`}></use>
              </svg>

              <button
                type="button"
                aria-label="Sort tasks"
                onClick={() => {
                  setAreTasksSorted((prev) => !prev);
                  setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
                }}
              >
                <svg id="icon-sorting" width={10} height={18}>
                  <use href={`${sprite}#icon-sort-arrow`}></use>
                </svg>
              </button>
            </FiltersBlock>
          </TitleFilterBlock>
          <Link
            to="/createTask"
            state={{ from: location }}
            id="desk-link"
            className="accent-text"
          >
            <PlusIcon />
            {t(button)}
          </Link>

          <CreateTaskLink
            className="accent-button"
            id="mob-link"
            state={{ from: location }}
            to="/createTask"
          >
            {t(button)}
          </CreateTaskLink>
        </CreateOfferBlock>

        <div id="tasks-list">
          {data?.content?.filter(
            (req) => req.requestType.requestTypeEn === cards
          ).length > 0 ? (
            <TasksList>
              {data?.content
                ?.filter((req) => req.requestType.requestTypeEn === cards)
                .map((req, index) => {
                  const { requestStatusEn } = req.requestStatus;
                  if (
                    requestStatusEn !== STATUSES_VALUES.done &&
                    requestStatusEn !== STATUSES_VALUES.canceled
                  ) {
                    return (
                      <Card
                        key={`${req.id}/${index}`}
                        requestData={req}
                        setIsConfirmApplicationOpen={
                          setIsConfirmApplicationOpen
                        }
                        setRequestId={setRequestId}
                      />
                    );
                  }
                  return null;
                })}
            </TasksList>
          ) : (
            <NoFoundTasksMsg
              className={location?.pathname === "/wantToHelp" ? "offers" : ""}
            />
          )}
        </div>
        <Pagination
          variant="tasks"
          currentPage={currentPage + 1}
          totalPages={totalPages}
          setPage={setPage}
        />
      </MainContainer>

      {isConfirmApplicationOpen && (
        <ConfirmationModal
          reqId={requestId}
          setIsConfirmApplicationOpen={setIsConfirmApplicationOpen}
          setIsSuccessModalOpen={setIsSuccessModalOpen}
          setIsSuccessOfferModalOpen={setIsSuccessOfferModalOpen}
        />
      )}

      {isSuccessModalOpen && (
        <SuccessModal
          variant="apply"
          title={"createTask.successWindow.sent"}
          text={"createTask.successWindow.textApply"}
          accentBtnText={"createTask.successWindow.myProfile"}
          setShowSuccessModal={setIsSuccessModalOpen}
        />
      )}

      {isSuccessOfferModalOpen && (
        <SuccessModal
          variant="apply"
          title={"createTask.successWindow.wellDone"}
          text={"createTask.successWindow.textOffer"}
          accentBtnText={"createTask.successWindow.myProfile"}
          setShowSuccessModal={setIsSuccessOfferModalOpen}
        />
      )}
    </TasksSection>
  );
};

export default Tasks;
