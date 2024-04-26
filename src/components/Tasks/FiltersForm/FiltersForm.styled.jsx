import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { gradientTextHover, subtitleStyle } from "../Tasks.styled";

export const accentBtn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  border-radius: 12px;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  width: 50%;
  padding: 12px 24px;

  @media screen and (min-width: 768px) {
    max-width: 173px;
    height: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 343px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
  min-height: 300px;
  ${({ $variant }) => $variant === "allFilters" && "margin-top: 20px;"}

  @media screen and (min-width: 1440px) {
    gap: 56px;
    margin-bottom: 56px;
  }
`;

export const ShowMoreFiltersWrap = styled.div`
  ${subtitleStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 450px) {
    ${({ $variant }) =>
      $variant === "createTask" &&
      "flex-direction: column; align-items: flex-start;"}
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    gap: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${gradientTextHover}

    @media screen and (min-width: 1440px) {
      display: none;
    }

    svg {
      transform: rotate(-90deg);
    }
  }
`;

export const Label = styled.div`
  ${subtitleStyle}
`;

export const FiltersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  min-height: 100px;
`;

export const FakeInputBlock = styled.div`
  position: relative;

  input {
    position: absolute;
    z-index: 3;
    opacity: 0;
    width: 100%;
    height: 37px;
    pointer-events: all;
    cursor: pointer;
  }

  input:checked + div {
    outline: 1px solid #548ba0;
    background-color: transparent;
    color: #548ba0;
    padding-right: 37px;
  }

  input:checked + div > svg use {
    stroke: #548ba0;
    fill: #548ba0;
  }

  input:not(:checked):hover + div {
    outline: 2px solid #246e8c;
    background-color: #548ba0;
  }

  input:not(:checked):active + div {
    outline: 2px solid #246e8c;
    background-color: #529ebd;
  }

  input:checked + div button {
    position: absolute;
    top: 50%;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transform: translateY(-50%);
    background-color: transparent;
  }
`;

export const FakeInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
  border-radius: 18px;
  padding: 8px 22px;
  background: #548ba0;
  pointer-events: none;
  cursor: pointer;
  transition: background-color 350ms ease-in-out, outline 150ms linear;

  button {
    display: none;
  }

  p {
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }

    &.region-text {
      text-transform: capitalize;
    }
  }

  svg {
    pointer-events: all;
  }

  svg use {
    stroke: #fff;
    fill: #fff;
  }
`;

export const ResetSearchBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &.all-filters {
    justify-content: center;
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const FiltersBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${gradientTextHover}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  ${accentBtn}
  width: 70%;

  @media screen and (min-width: 375px) {
    max-width: 150px;
  }

  @media screen and (min-width: 393px) {
    max-width: 170px;
  }

  @media screen and (min-width: 450px) {
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {
    max-width: 173px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 343px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CreateTaskLink = styled(Link)`
  ${accentBtn}
  margin: 0;
  position: fixed;
  opacity: 1;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;

  &#mob-link {
    text-align: center;
    width: 80%;
    max-width: 340px;
    height: 48px;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
