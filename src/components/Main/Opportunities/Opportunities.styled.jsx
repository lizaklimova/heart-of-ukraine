import styled from "styled-components";

export const OpportunitiesSection = styled.section`
  padding-bottom: 86px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 213px;
  }

  @media screen and (min-width: 1920px) {
    padding-bottom: 256px;
  }
`;

export const OpportunitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 26px 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const OpportunityItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: unset;
    width: calc((100% - 100px) / 3);
  }
`;

export const OpportunitiesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    @media screen and (min-width: 768px) {
      width: 120px;
    }

    @media screen and (min-width: 1440px) {
      width: 200px;
    }

    @media screen and (min-width: 1920px) {
      width: 231px;
    }
  }

  h3 {
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    color: #053041;
    margin: 26px 0 21px 0;

    @media screen and (min-width: 768px) {
      font-weight: 600;
      line-height: 1.25;
      margin: 16px 0;
    }

    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 1.5;
      margin-top: 40px 0 32px 0;
    }
  }

  p {
    font-size: 16px;
    color: #0b1c24;

    @media screen and (min-width: 1440px) {
      line-height: 1.5;
    }
  }
`;
