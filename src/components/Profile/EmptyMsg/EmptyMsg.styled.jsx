import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyBlock = styled.div`
  padding: 50px 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0 70px 0;

    img {
      width: unset;
      height: unset;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0;

    img {
      width: unset;
      height: 430px;
      margin: 0 auto;
    }
  }
`;

export const EmptyText = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #053041;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export const GoToSearchLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  width: 100%;
  max-width: 323px;
  padding: 12px 24px;
  margin: 96px auto 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 343px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;
