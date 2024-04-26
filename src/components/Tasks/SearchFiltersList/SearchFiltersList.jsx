import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { getAllCategories, getAllRegions } from "api";
import { capitalizeStr } from "helpers";
import sprite from "assets/icons/sprite.svg";
import ListArrow from "assets/icons/ListArrow";
import {
  FakeInput,
  FakeInputBlock,
  FiltersList,
  Label,
  ShowMoreFiltersWrap,
} from "components/Tasks/FiltersForm/FiltersForm.styled";
import {
  ErrorMsg,
  RestrictionMsg,
} from "../CreateTask/CreateTaskForm/CreateTaskForm.styled";

const SearchFiltersList = ({
  showMore,
  variant,
  setCategoriesFilters,
  setRegionsFilters,
  maxFiltersLength = 100,
  areCategoriesEmpty,
  isRegionEmpty,
  setAreCategoriesEmpty,
  setIsRegionEmpty,
  defaultCheckedCategories,
  defaultCheckedRegions,
  shouldResetElements,
  isUpdating,
}) => {
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [categoriesSelectedCount, setCategoriesSelectedCount] = useState(
    isUpdating ? defaultCheckedCategories.length : 0
  );
  const [regionsSelectedCount, setRegionsSelectedCount] = useState(
    isUpdating ? defaultCheckedRegions.length : 0
  );
  const [restrictedCheckbox, setRestrictedCheckbox] = useState(null);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (variant === "createTask" && shouldResetElements) {
      setCategoriesSelectedCount(0);
      setRegionsSelectedCount(0);
    }
  }, [shouldResetElements, variant]);

  useEffect(() => {
    const fetchFilters = async () => {
      const categs = await getAllCategories();
      const regs = await getAllRegions();

      setCategories(categs);

      const ivanoFrankivskIndex = regs?.findIndex(
        (reg) => reg.regionEn === "IVANO_FRANKIVSK"
      );

      const updatedRegs = [...regs];
      updatedRegs[ivanoFrankivskIndex] = {
        regionEn: "IVANO-FRANKIVSK",
        regionUa: "ІВАНО-ФРАНКІВСЬКА",
      };

      setRegions(updatedRegs);
    };

    fetchFilters();
  }, []);

  const disallowCheckingFilter = (target, quantity) => {
    const isChecked = target.checked;
    const changeFn =
      target.name === "category"
        ? setCategoriesSelectedCount
        : setRegionsSelectedCount;

    const selectedCount =
      target.name === "category"
        ? categoriesSelectedCount
        : regionsSelectedCount;

    if (isChecked) {
      if (selectedCount < quantity) {
        changeFn((prev) => prev + 1);

        setRestrictedCheckbox(null);
      } else {
        target.checked = false;
        setRestrictedCheckbox(target.name);
      }
    } else {
      changeFn(selectedCount - 1);
      setRestrictedCheckbox(null);
    }
  };

  const checkboxProps = (filterType, element) =>
    defaultCheckedCategories && defaultCheckedRegions
      ? // eslint-disable-next-line
        !!filterType.find((el) => el == element)
      : false;

  return (
    <>
      <Label $variant={variant}>
        <ShowMoreFiltersWrap $variant={variant}>
          {t("tasks.category")}
          {variant === "createTask" && (
            <RestrictionMsg
              className={restrictedCheckbox === "category" && "invalid"}
            >
              {t("createTask.categoryRestriction")}
            </RestrictionMsg>
          )}
          {showMore && variant !== "allFilters" && (
            <Link
              to={`${location.pathname}/filters`}
              state={{ from: location }}
            >
              {t("tasks.more")}
              <ListArrow />
            </Link>
          )}
        </ShowMoreFiltersWrap>

        <FiltersList>
          {categories
            .slice(0, maxFiltersLength)
            .map(({ id, iconTag, categoryNameEn, categoryNameUa }) => (
              <FakeInputBlock key={id}>
                <input
                  type="checkbox"
                  name="category"
                  value={id}
                  defaultChecked={checkboxProps(defaultCheckedCategories, id)}
                  onChange={({ target }) => {
                    if (variant === "createTask") {
                      setAreCategoriesEmpty(false);
                      disallowCheckingFilter(target, 5);
                      if (categoriesSelectedCount > 5 && !target.checked) {
                        target.disabled = true;
                      }

                      target.disabled = false;
                    }

                    setCategoriesFilters((prev) => {
                      if (!target.checked) {
                        return [...prev.filter((el) => el !== target.value)];
                      }

                      return [...prev, target.value];
                    });
                  }}
                />
                <FakeInput>
                  {iconTag && (
                    <svg width={19} height={19}>
                      <use href={`${sprite}#${iconTag}`}></use>
                    </svg>
                  )}
                  <p>
                    {i18n.language === "uk"
                      ? capitalizeStr(categoryNameUa)
                      : capitalizeStr(categoryNameEn)}
                  </p>
                  <button type="button" aria-label="Delete choice">
                    <svg width={13} height={13}>
                      <use href={`${sprite}#icon-delete`}></use>
                    </svg>
                  </button>
                </FakeInput>
              </FakeInputBlock>
            ))}
        </FiltersList>

        {variant === "createTask" && areCategoriesEmpty && (
          <ErrorMsg id="checkboxes">
            {t("createTask.validation.chooseCategory")}
          </ErrorMsg>
        )}
      </Label>

      <Label>
        <ShowMoreFiltersWrap $variant={variant}>
          {t("tasks.region")}
          {variant === "createTask" && (
            <RestrictionMsg
              className={restrictedCheckbox === "region" && "invalid"}
            >
              {t("createTask.regionRestriction")}
            </RestrictionMsg>
          )}
          {showMore && variant !== "allFilters" && (
            <Link
              to={`${location.pathname}/filters`}
              state={{ from: location }}
            >
              {t("tasks.more")}
              <ListArrow />
            </Link>
          )}
        </ShowMoreFiltersWrap>

        <FiltersList>
          {regions
            .slice(0, maxFiltersLength)
            .map(({ regionEn, regionUa }, index) => (
              <FakeInputBlock key={`${index}/${regionEn}`}>
                <input
                  id={index === 0 ? "first" : ""}
                  type="checkbox"
                  name="region"
                  value={regionEn}
                  defaultChecked={checkboxProps(
                    defaultCheckedRegions,
                    regionEn
                  )}
                  onChange={({ target }) => {
                    if (variant === "createTask") {
                      setIsRegionEmpty(false);
                      disallowCheckingFilter(target, 1);
                      if (regionsSelectedCount > 1 && !target.checked) {
                        target.disabled = true;
                      }

                      target.disabled = false;
                    }

                    setRegionsFilters((prev) => {
                      if (!target.checked) {
                        return [...prev.filter((el) => el !== target.value)];
                      }

                      return [...prev, target.value];
                    });
                  }}
                />
                <FakeInput>
                  <p className="region-text">
                    {i18n.language === "uk"
                      ? regionUa.toLowerCase()
                      : regionEn.toLowerCase()}
                  </p>
                  <button
                    id="region-reset"
                    type="button"
                    aria-label="Delete choice"
                  >
                    <svg width={13} height={13}>
                      <use href={`${sprite}#icon-delete`}></use>
                    </svg>
                  </button>
                </FakeInput>
              </FakeInputBlock>
            ))}
        </FiltersList>

        {variant === "createTask" && isRegionEmpty && (
          <ErrorMsg id="checkboxes">
            {t("createTask.validation.chooseRegion")}
          </ErrorMsg>
        )}
      </Label>
    </>
  );
};

export default SearchFiltersList;
