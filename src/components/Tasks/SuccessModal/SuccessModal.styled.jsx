import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { gradientTextHover } from "../Tasks.styled";

export const backdropStyles = css`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(33, 33, 33, 0.2);
  z-index: 10;
`;

export const Backdrop = styled.div`
  ${backdropStyles}
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 361px;
  min-height: 500px;
  padding: 58px 20px 58px 20px;
  border-radius: 16px;
  background: #fefefe;
  box-shadow: 0px 4px 12px 0px rgba(112, 122, 167, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button#close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    padding: 0;

    svg {
      fill: #a7552b;
      transition: fill 150ms linear;
    }

    &:hover svg,
    &:focus svg {
      fill: #872e00;
    }

    &:active svg {
      fill: #5a1e00;
    }

    @media screen and (min-width: 768px) {
      top: 25px;
      right: 25px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 616px;
  }

  @media screen and (min-width: 768px) {
    max-width: 926px;
  }
`;

export const ModalTitle = styled.h4`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: #204250;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const ModalText = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: #0b1c24;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ModalPic = styled.svg`
  fill: none;
  margin-bottom: 56px;
`;

export const ModalLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 343px;
  padding: 12px 24px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;

  &.accent-button {
    box-shadow: 0px 4px 25px 0px rgba(93, 93, 93, 0.5);
  }

  &.secondary-button {
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 32px;
    ${gradientTextHover}
  }
`;
