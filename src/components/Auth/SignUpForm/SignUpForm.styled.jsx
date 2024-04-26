import styled from "styled-components";

export const PrivacyLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;

  ${({ $variant }) =>
    $variant === "confirm" &&
    "align-items: center;justify-content: flex-start;"}

  input {
    min-width: 24px;
    height: 24px;
    display: none;
  }

  input:checked + div svg {
    display: block;
  }

  input:checked + div {
    transition: border-color 150ms linear;
    border-color: #787d83;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;

    ${({ $variant }) => $variant === "confirm" && " margin-top: 0;"}
  }
`;

export const CheckBox = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #d8dee4;
  background-color: #f5f5f5;

  &.invalid {
    border-color: #fe4747;
  }

  svg {
    display: none;
  }
`;

export const PrivacyText = styled.p`
  padding-left: 32px;
  font-size: 14px;
  color: #0b1c24;
  line-height: 1.5;
  margin-top: -3px;

  a {
    color: #a7552b !important;
    transition: color 150ms linear;

    &:hover,
    &:focus {
      color: #872e00 !important;
    }

    &:active {
      color: #5a1e00 !important;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2px;
  }
`;
