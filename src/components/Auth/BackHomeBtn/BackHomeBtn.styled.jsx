import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeLink = styled(Link)`
  position: absolute;
  top: ${({ $variant }) =>
    $variant === "tasks" ? "-70px" : $variant === "profile" ? "0" : "20px"};
  font-family: Montserrat;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: ${({ $variant }) => ($variant === "profile" ? "8px" : "6px")};
  color: #a7552b;
  ${({ $variant }) => $variant === "changePwd" && "display:none;"};

  svg {
    fill: transparent;
    stroke: #a7552b;
  }

  @media screen and (min-width: 768px) {
    top: ${({ $variant }) =>
      $variant === "tasks"
        ? "-70px"
        : $variant === "profile"
        ? "25px"
        : "40px"};
  }

  @media screen and (min-width: 1440px) {
    ${({ $variant }) =>
      $variant === "changePwd" &&
      "display:flex;position: static;margin-bottom: 49px;"};
    top: ${({ $variant }) =>
      $variant === "tasks"
        ? "-90px"
        : $variant === "profile"
        ? "40px"
        : "52px"};
    ${({ $variant }) => $variant === "auth" && "top: 52px;left: 20px;"};
    font-size: 22px;
    gap: 6px;
    line-height: 1.5;
  }
`;
