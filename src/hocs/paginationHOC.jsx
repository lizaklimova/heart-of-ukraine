import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { smoothScrollToTarget } from "helpers";

const paginationHOC = (WrappedComponent) => {
  const Pagination = ({
    fetchFn,
    smoothScroll,
    limits,
    variant,
    cards,
    areItemsFiltered,
    setAreItemsFiltered,
    setAreFiltersDeleted,
    title,
    subtitle,
    button,
    target,
  }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [sortingOrder, setSortingOrder] = useState("asc");
    const [totalPages, setTotalPages] = useState(1);
    const [limit, seLimit] = useState(() =>
      window.innerWidth > 767 ? limits.tab : limits.mob
    );

    const [searchParams] = useSearchParams();

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          seLimit(limits.tab);
        } else if (window.innerWidth <= 767) {
          seLimit(limits.mob);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [limits.mob, limits.tab]);

    useEffect(() => {
      const regionsFilters = searchParams.get("regions");
      const categoriesFilters = searchParams.get("categories");

      async function fetchData() {
        let response;
        let body = [page, limit, sortingOrder];

        if (areItemsFiltered) {
          if (regionsFilters || categoriesFilters) {
            body = [
              regionsFilters?.split(",").join(","),
              categoriesFilters?.split(",").join(","),
              page,
              limit,
              sortingOrder,
            ];
          }
        }

        response = await fetchFn(...body, cards);
        setData(response);
        setTotalPages(response?.totalPages);

        if ((smoothScroll && page) || areItemsFiltered) {
          smoothScrollToTarget(target, -100);
        }

        return response;
      }

      fetchData();
    }, [
      page,
      limit,
      searchParams,
      sortingOrder,
      areItemsFiltered,
      cards,
      fetchFn,
      smoothScroll,
      target,
    ]);

    return (
      <WrappedComponent
        cards={cards}
        variant={variant}
        data={data}
        limit={limit}
        setLimit={seLimit}
        setData={setData}
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
        setAreItemsFiltered={setAreItemsFiltered}
        setAreFiltersDeleted={setAreFiltersDeleted}
        setSortingOrder={setSortingOrder}
        sortingOrder={sortingOrder}
        title={title}
        subtitle={subtitle}
        button={button}
      />
    );
  };

  return Pagination;
};

export default paginationHOC;
