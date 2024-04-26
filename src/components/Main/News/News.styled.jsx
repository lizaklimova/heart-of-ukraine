import styled from "styled-components";

export const NewsSection = styled.section`
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 160px;
  }

  @media screen and (min-width: 1920px) {
    padding-bottom: 170px;
  }

  h2 {
    @media screen and (min-width: 1920px) {
      margin-bottom: 136px;
    }
  }
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  cursor: default;

  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`;

export const NewsImg = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 240px;
  }

  @media screen and (min-width: 1440px) {
    height: 289px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 331px;
  }
`;

export const NewsDescr = styled.p`
  font-family: Nunito;
  font-size: 15.342px;
  font-weight: 400;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  align-self: stretch;
  -webkit-line-clamp: 4;

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

  @media screen and (min-width: 1024px) {
    -webkit-line-clamp: 5;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.5;
  }
`;

export const NewsTimeDateBlock = styled.div`
  display: none;
`;
