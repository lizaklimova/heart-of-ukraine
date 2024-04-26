import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FiltersForm from "components/Tasks/FiltersForm";
import BackHomeBtn from "components/Auth/BackHomeBtn";
import { TasksSection } from "components/Tasks/Tasks.styled";
import { MainContainer } from "layouts/MainContainer.styled";
import Header from "components/Header";

const FiltersPage = () => {
  const [categoriesFilters, setCategoriesFilters] = useState([]);
  const [regionsFilters, setRegionsFilters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "location",
      `${location?.state?.from?.pathname}/filters`
    );
  }, [location?.state?.from?.pathname]);

  const handleSavingFilters = (event) => {
    event.preventDefault();
    const prevLocation = location?.state?.from?.pathname;

    const pathWithParams = `${prevLocation}?regions=${regionsFilters.join(
      ","
    )}&categories=${categoriesFilters.join(",")}&additional=true`;

    navigate(pathWithParams);
  };

  return (
    <>
      <Header />
      <TasksSection $variant="allFilters">
        <MainContainer>
          <BackHomeBtn
            variant="tasks"
            to={location?.state?.from}
            text="tasks.back"
          />
          <FiltersForm
            variant="allFilters"
            handleFiltersSearch={handleSavingFilters}
            setCategoriesFilters={setCategoriesFilters}
            setRegionsFilters={setRegionsFilters}
            categoriesSearch={categoriesFilters}
            regionsSearch={regionsFilters}
          />
        </MainContainer>
      </TasksSection>
    </>
  );
};

export default FiltersPage;
