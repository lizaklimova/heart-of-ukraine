import styled, { css } from "styled-components";
import heroTextBg from "assets/images/hero/hero-text-bg.jpg";
import { gradientTextHover } from "components/Tasks/Tasks.styled";

const commonTextBlocks = css`
  position: relative;

  h2 {
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-clip: text;
    color: transparent;
    background: url(${heroTextBg}) lightgray center / contain repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 375px) {
      font-size: 30px;
      letter-spacing: 3.669px;
    }

    @media screen and (min-width: 393px) {
      font-size: 36.69px;
    }

    @media screen and (min-width: 768px) {
      font-size: 51px;
      letter-spacing: 5.1px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 90px;
      letter-spacing: 7px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 100px;
      letter-spacing: 10px;
    }
  }

  p {
    position: absolute;
    font-size: 20px;
    font-weight: 200;
    line-height: 1;
    letter-spacing: 1px;

    @media screen and (min-width: 375px) {
      font-size: 30px;
      letter-spacing: 3.744px;
    }

    @media screen and (min-width: 393px) {
      font-size: 37.438px;
    }

    @media screen and (min-width: 768px) {
      font-size: 51px;
      letter-spacing: 5.1px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 90px;
    }

    @media screen and (min-width: 1920px) {
      font-size: 100px;
    }
  }
`;

export const HeroSection = styled.section`
  padding: 61px 0 40px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 77px 0 53px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0;
  }

  @media screen and (min-width: 1920px) {
    padding: 153px 0 220px 0;
  }
`;

export const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 48px;
  }

  @media screen and (min-width: 1440px) {
    gap: 70px;
  }

  @media screen and (min-width: 1920px) {
    gap: 101px;
  }
`;

export const WhoDemandsBlock = styled.div`
  ${commonTextBlocks}

  h2 {
    position: absolute;

    ${({ $lang }) =>
      $lang === "uk" ? "top: 5px;left: 33px;" : "top: 11px;left: 102px;"}

    @media screen and (min-width: 375px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top:7px;left: 55px;" : "top: 20px;left: 169px;"}
    }

    @media screen and (min-width: 393px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top:10px;left: 66px;" : "top: 22px;left: 203px;"}
    }

    @media screen and (min-width: 768px) {
      ${({ $lang }) =>
        $lang === "uk" ? "left: 90px;" : "top: 31px;left: 278px;"}
    }

    @media screen and (min-width: 1440px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top: 25px;left: 155px;" : "top: 55px;left: 468px;"}
    }

    @media screen and (min-width: 1920px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top: 30px;left: 170px;" : "top: 50px;left: 508px;"}
    }
  }

  p {
    position: static;
    color: #000;
    font-family: Nunito;
  }
`;

export const WillFindBlock = styled.div`
  ${commonTextBlocks}
  margin-bottom: 30px;

  @media screen and (min-width: 393px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 90px;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 120px;
  }

  p {
    color: #0b1c24;
    font-family: Montserrat;

    ${({ $lang }) =>
      $lang === "uk" ? "top: 10px;left: 47px;" : "top: 13.5px;left: 60px;"}

    @media screen and (min-width: 375px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top: 12px;left: 67px;" : "top: 17px;left: 87px;"}
    }

    @media screen and (min-width: 393px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top:14.5px;left: 83px;" : "top: 22px;left: 106px;"}
    }

    @media screen and (min-width: 768px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top: 20px;left: 113px;" : "top: 30px;left: 146px;"}
    }

    @media screen and (min-width: 1440px) {
      ${({ $lang }) =>
        $lang === "uk" ? "top: 36px;left: 195px;" : "top: 53.5px;left: 253px;"}
    }

    @media screen and (min-width: 1920px) {
      ${({ $lang }) =>
        $lang === "uk"
          ? "top: 40px;left: 223px;"
          : "top: 59.5px;left: 285.5px;"}
    }
  }
`;

export const HeroDescr = styled.p`
  color: #0b1c24;
  font-family: Nunito;
  font-size: 16px;
  line-height: normal;

  @media screen and (min-width: 768px) {
    max-width: 294px;
    font-weight: 500;
  }

  @media screen and (min-width: 1024px) {
    max-width: 350px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 600px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.5;
  }

  @media screen and (min-width: 1920px) {
    max-width: 701px;
  }
`;

export const JoinUsLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  background-color: transparent;
  background: linear-gradient(
    -90deg,
    rgba(255, 165, 2, 1) 0%,
    rgba(200, 81, 32, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  ${gradientTextHover}
  margin: 30px 0;

  span {
    display: flex;
    align-items: center;

    #hero-circle {
      margin-left: -10px;
    }
  }

  @media screen and (min-width: 393px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 0;

    span #hero-circle {
      width: 40px;
      height: 40px;
      margin-left: -15px;
    }

    span #hero-arrow {
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 25px;
    margin-top: 50px;
    gap: 15px;

    span #hero-circle {
      width: 81px;
      height: 81px;
      margin-left: -30px;
    }

    span #hero-arrow {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (min-width: 1920px) {
    margin-top: 64px;
    font-size: 30px;
  }
`;

export const HeroImg = styled.picture`
  img {
    width: 100%;
    max-height: 400px;
    margin: 0 auto;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 400px;
      height: 550px;
      max-height: unset;
      object-fit: auto;
      z-index: -1;
    }

    @media screen and (min-width: 1024px) {
      width: 650px;
    }

    @media screen and (min-width: 1440px) {
      width: 800px;
      height: 900px;
    }

    @media screen and (min-width: 1920px) {
      width: 1100px;
      height: 1170px;
    }
  }
`;
