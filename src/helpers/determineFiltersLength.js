import {
  AVAILABLE_CATEGORIES_LENGTH,
  MAX_MOB_LENGTH_FOR_FILTERS,
  MAX_TAB_LENGTH_FOR_FILTERS,
} from "constants";

const determineFiltersLength = (variant) => {
  return variant === "allFilters"
    ? AVAILABLE_CATEGORIES_LENGTH
    : () =>
        window.innerWidth > 1439
          ? AVAILABLE_CATEGORIES_LENGTH
          : window.innerWidth > 767
          ? MAX_TAB_LENGTH_FOR_FILTERS
          : MAX_MOB_LENGTH_FOR_FILTERS;
};

export default determineFiltersLength;
