import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const commonBeforeAfter = css`
  position: absolute;
  top: 50%;
  display: block;
  content: "";
  width: 100px;
  height: 2px;
  background-color: #c2ced8;

  @media screen and (min-width: 350px) {
    width: 115px;
  }

  @media screen and (min-width: 375px) {
    width: 126px;
  }
`;

export const DecorOrElement = styled.p`
  position: relative;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  width: 90%;
  color: #0b1c24;
  margin: 0 auto;

  &::before {
    ${commonBeforeAfter}
    right: 0;
  }

  &::after {
    ${commonBeforeAfter}
  }

  @media screen and (min-width: 768px) {
    width: 343px;
  }
`;

export const GoogleLink = styled(Link)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;
  border-radius: 12px;
  border: 2px solid #c2ced8;
  padding: 12px 24px;
  margin: 32px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  color: #707aa7;
  transition: border-color 150ms linear, background-color 150ms linear;

  &:hover,
  &:focus {
    border-color: #707aa7;
  }

  &:active {
    border-color: #c2ced8;
    background-color: #c2ced8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 343px;
    margin-top: 26px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    max-height: 48px;
  }
`;
