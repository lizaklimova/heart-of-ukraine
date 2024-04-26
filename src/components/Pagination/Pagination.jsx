import { nanoid } from "@reduxjs/toolkit";
import sprite from "assets/icons/sprite.svg";
import {
  Dots,
  NextPageBtn,
  PaginationBlock,
  PaginationBtn,
  PrevPageBtn,
} from "./Pagination.styled";

const Pagination = ({
  currentPage,
  totalPages,
  setPage,
  variant,
  request,
  scrollToTop,
}) => {
  const renderDots = () => <Dots key={nanoid()}>. . .</Dots>;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 1) {
      return pageNumbers;
    }

    pageNumbers.push(1);

    if (currentPage > 1) {
      pageNumbers.push("dots");
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      pageNumbers.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
      pageNumbers.push("dots");
    }

    if (totalPages !== 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number, index) => {
      if (number === "dots") {
        return renderDots();
      }

      return (
        <PaginationBtn
          type="button"
          key={index}
          onClick={() => {
            setPage(number - 1);
            if (scrollToTop) {
              scrollToTop();
            }
          }}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </PaginationBtn>
      );
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setPage(currentPage - 2);
    }
  };

  return (
    <PaginationBlock $variant={variant} $request={request}>
      {currentPage !== 1 && (
        <PrevPageBtn
          type="button"
          onClick={() => {
            handlePrevPage();
            if (scrollToTop) {
              scrollToTop();
            }
          }}
        >
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-pagin-arrow`}></use>
          </svg>
        </PrevPageBtn>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <NextPageBtn
          type="button"
          onClick={() => {
            handleNextPage();
            if (scrollToTop) {
              scrollToTop();
            }
          }}
        >
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-pagin-arrow`}></use>
          </svg>
        </NextPageBtn>
      )}
    </PaginationBlock>
  );
};

export default Pagination;
