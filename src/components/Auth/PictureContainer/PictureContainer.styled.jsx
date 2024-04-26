import styled from "styled-components";
import deskPic from "assets/images/auth/auth-bg-desk.jpg";
import tabPic from "assets/images/auth/auth-bg-tab.jpg";

export const PicContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #efeff5;
  }
`;

export const PicBlock = styled.div`
  align-self: stretch;
  height: 100%;
  min-width: 253px;
  width: 50%;
  background: url(${tabPic}) no-repeat center / cover;

  @media screen and (min-width: 1000px) {
    background-image: url(${deskPic});
  }

  @media screen and (min-width: 1440px) {
    min-width: 650px;
  }

  @media screen and (min-width: 1700px) {
    min-width: 760px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 960px;
  }
`;

export const PositioningWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;
