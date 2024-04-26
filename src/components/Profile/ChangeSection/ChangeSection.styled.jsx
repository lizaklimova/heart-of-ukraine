import styled from "styled-components";
import { gradientTextHover } from "components/Tasks/Tasks.styled";

export const ChangeWrap = styled.div`
  padding: 80px 9px 69px 9px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 91px;
    margin-bottom: 90px;
    width: 383px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 114px 100px auto;
    width: 659px;
  }

  @media screen and (min-width: 1920px) {
    margin: 0 193px 128px auto;
    width: 800px;
  }
`;

export const ErrorSizeMsg = styled.p`
  font-size: 14px;
  color: #fe4747;
  text-align: center;
  margin-top: 10px;
`;

export const ChangePhotoLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 12px;
  font-style: normal;
  padding: 0;
  cursor: pointer;
  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );
  background-clip: text;
  ${gradientTextHover}
  pointer-events: all;

  &:hover svg {
    stroke: none;
  }

  input {
    position: absolute;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    cursor: pointer;
    visibility: hidden;

    &:hover,
    &:focus {
      background: none;
      border: none;
      outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;
