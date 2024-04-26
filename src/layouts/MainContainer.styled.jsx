import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;

  @media screen and (min-width: 393px) {
    max-width: 393px;
  }

  @media screen and (min-width: 450px) {
    max-width: 450px;
  }

  @media screen and (min-width: 600px) {
    max-width: 600px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 992px;
  }

  @media screen and (min-width: 1280px) {
    overflow: visible;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1372px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1752px;
  }
`;
