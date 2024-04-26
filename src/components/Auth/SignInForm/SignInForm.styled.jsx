import styled from "styled-components";
import { Link } from "react-router-dom";
import { gradientTextHover } from "components/Tasks/Tasks.styled";

export const ResetPwdBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  line-height: 1;
  margin-bottom: 48px;
  ${({ $variant }) => $variant === "changePwd" && "margin: 40px 0 32px 0;"}

  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
    ${({ $variant }) => $variant === "changePwd" && "margin-top: 56px;"}
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    ${({ $variant }) => $variant === "changePwd" && "margin-top: 74px;"}
  }

  @media screen and (min-width: 1920px) {
    ${({ $variant }) => $variant === "changePwd" && "margin-top: 48px;"}
  }

  p {
    color: #423939;
  }
`;

export const ResetPwdLink = styled(Link)`
  color: #a7552b;
  font-family: Montserrat;
  font-weight: 500;
  ${gradientTextHover}
`;
