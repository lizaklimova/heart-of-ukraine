import styled, { css } from "styled-components";

export const gradientTextHover = css`
  &:hover,
  &:focus {
    background: conic-gradient(
      from -3deg at 100% -13%,
      #f67307 0deg,
      #f67307 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:active {
    background: conic-gradient(
      from -3deg at 100% -13%,
      #b35e0f 0deg,
      #b35e0f 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const subtitleStyle = css`
  font-family: Nunito;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight: 600;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    font-weight: 500;
  }
`;

export const TasksSection = styled.section`
  position: relative;
  padding: 71px 0 85px;

  @media screen and (min-width: 768px) {
    ${({ $variant }) => $variant === "allFilters" && "padding-top: 100px;"}
  }
`;

export const TasksTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: #000;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 44px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
    margin-top: 64px;
    margin-bottom: 60px;
  }
`;

export const CreateOfferBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 46px;
  }

  h3 {
    ${subtitleStyle}
  }

  #desk-link {
    @media screen and (max-width: 767px) {
      display: none;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${gradientTextHover}

    svg {
      width: 30px;
      height: 30px;

      &:hover,
      &:focus {
        fill: #f67307;
        stroke: #f67307;
      }
    }

    @media screen and (min-width: 1440px) {
      font-size: 32px;

      svg {
        width: 40px;
        height: 40px;
      }
    }

    @media screen and (min-width: 1920px) {
      margin-bottom: 46px;
    }
  }
`;

export const TitleFilterBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FiltersBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    &#icon-sorting {
      stroke: #548ba0;
      ${({ $isSorted }) => $isSorted && "transform: rotate(180deg);"};
      transition: stroke 150ms linear;
    }

    &#icon-filter {
      fill: transparent;
      stroke: #053041;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid rgba(193, 215, 203, 0.2);
    padding: 10px 18px;
    background: #fff;
    box-shadow: 0px 1px 3px 0px rgba(122, 127, 170, 0.16);

    &:hover svg,
    &:focus svg {
      stroke: #005171 !important;
    }
  }
`;

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
  }
`;
