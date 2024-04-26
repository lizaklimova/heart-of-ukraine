import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import {
  AVAILABLE_CATEGORIES_LENGTH,
  MAX_MOB_LENGTH_FOR_FILTERS,
  MAX_TAB_LENGTH_FOR_FILTERS,
} from "constants";
import { determineFiltersLength } from "helpers";
import TrashIcon from "src/assets/icons/TrashIcon";
import SearchFiltersList from "../SearchFiltersList";
import {
  Form,
  FiltersBtn,
  ResetSearchBtnWrap,
  SearchBtn,
} from "./FiltersForm.styled";

const FiltersForm = ({
  variant,
  handleFiltersSearch,
  setCategoriesFilters,
  setRegionsFilters,
  setAreFiltersDeleted,
  categoriesSearch,
  regionsSearch,
  defaultCheckedCategories,
  defaultCheckedRegions,
}) => {
  const [maxFiltersLength, setMaxFiltersLength] = useState(
    determineFiltersLength(variant)
  );
  const [_, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setMaxFiltersLength(AVAILABLE_CATEGORIES_LENGTH);
      } else if (window.innerWidth <= 767) {
        setMaxFiltersLength(MAX_MOB_LENGTH_FOR_FILTERS);
      } else {
        setMaxFiltersLength(MAX_TAB_LENGTH_FOR_FILTERS);
      }
    };

    if (variant !== "allFilters")
      window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, variant]);

  return (
    <Form $variant={variant} onSubmit={handleFiltersSearch}>
      <SearchFiltersList
        showMore={true}
        variant={variant}
        setCategoriesFilters={setCategoriesFilters}
        setRegionsFilters={setRegionsFilters}
        maxFiltersLength={maxFiltersLength}
        defaultCheckedCategories={defaultCheckedCategories}
        defaultCheckedRegions={defaultCheckedRegions}
      />
      <ResetSearchBtnWrap
        className={variant === "allFilters" ? "all-filters" : ""}
      >
        <SearchBtn
          className="accent-button"
          type="submit"
          aria-label="Search the tasks by filters"
          disabled={!categoriesSearch.length && !regionsSearch[0]}
        >
          {t("tasks.search")}
        </SearchBtn>
        <FiltersBtn
          type="reset"
          aria-label="Reset filters"
          onClick={() => {
            setSearchParams({});
            setRegionsFilters([]);
            setCategoriesFilters([]);

            if (setAreFiltersDeleted) {
              setAreFiltersDeleted(true);
            }
          }}
        >
          {t("tasks.resetFilters")}
          <TrashIcon />
        </FiltersBtn>
      </ResetSearchBtnWrap>
    </Form>
  );
};

export default FiltersForm;
