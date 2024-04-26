import styled from "styled-components";
import { Link } from "react-router-dom";
import decorRight from "assets/images/notFound/decor-right.svg";
import decorRightTab from "assets/images/notFound/decor-right-tab.svg";
import decorRight1920 from "assets/images/notFound/decor-right-1920.svg";
import decorLeft from "assets/images/notFound/decor-left.svg";
import decorLeftDesk from "assets/images/notFound/decor-left-desk.svg";
import decorLeft1920 from "assets/images/notFound/decor-left-1920.svg";

export const NotFoundSection = styled.div`
  padding: 283px 0 268px 0;
  background: url(${decorLeft}) no-repeat -75px -230px/400px,
    url(${decorRight}) no-repeat right -70px bottom -230px/400px;

  @media screen and (min-width: 768px) {
    padding: 242px 0 400px 0;
    background: url(${decorLeft}) no-repeat -90px -250px/400px,
      url(${decorRightTab}) no-repeat right -10px bottom -360px/500px;
  }

  @media screen and (min-width: 1440px) {
    padding: 160px 0 132px 0;
    background: url(${decorLeftDesk}) no-repeat 0 -150px/500px,
      url(${decorRight}) no-repeat right 0 bottom -250px/500px;
  }

  @media screen and (min-width: 1920px) {
    padding: 120px 0;
    background: url(${decorLeft1920}) no-repeat -200px -150px/700px,
      url(${decorRight1920}) no-repeat right -100px bottom -160px/700px;
  }
`;

export const StatusCodeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25.3px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  img {
    @media screen and (min-width: 768px) {
      width: 154px;
      height: 137px;
    }
  }

  p {
    font-family: Nunito;
    font-size: 126.482px;
    font-weight: 400;
    line-height: 1;
    color: #000;

    @media screen and (min-width: 768px) {
      font-size: 200px;
    }
  }
`;

export const NotFoundText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  margin: 38px auto 68px auto;
  max-width: 311px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin: 42px auto 76px auto;
    max-width: 474px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 26px;
    margin: 63px auto 60px auto;
    max-width: 602px;
  }
`;

export const GoHomeBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 321px;
  padding: 12px 24px;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    max-width: 343px;
    font-size: 18px;
  }
`;
