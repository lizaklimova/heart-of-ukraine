import styled from "styled-components";

export const NotFoundTasksSection = styled.section`
  padding: 60px 0 120px 0;

  img {
    margin: 0 auto;
  }

  h5 {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    color: #204250;
    margin: 48px 0 20px 0;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    max-width: 361px;
    margin: 0 auto;

    a {
      font-weight: 600;
      color: #a7552b;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 117px;

    img {
      width: 500px;
      height: 550px;
    }

    h5 {
      font-size: 26px;
      margin: 56px 0 28px 0;
    }

    p {
      font-size: 20px;
      max-width: 640px;

      &.offers {
        max-width: 670px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 120px;

    img {
      width: 685px;
      height: 753px;
    }

    h5 {
      font-size: 36px;
      margin: 64px 0 32px 0;
    }

    p {
      font-size: 24px;
      max-width: 767px;

      &.offers {
        max-width: 800px;
      }
    }
  }
`;
