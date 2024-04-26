import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: #ecf3fb;
  padding: 32px 14px 21px 14px;

  @media screen and (min-width: 450px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 76px 50px 64px 50px;
  }

  @media screen and (min-width: 1920px) {
    padding: 64px 100px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;

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
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 992px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1300px;
  }
`;

export const FooterPositionContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 170px;
  }
`;

export const FooterListsWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    align-items: center;
    gap: 170px;
  }
`;

export const FooterNav = styled.nav`
  margin: 32px 0 26.5px 0;

  @media screen and (min-width: 768px) {
    margin: 29px 0 66px 0;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 0;

    @media screen and (min-width: 450px) {
      column-gap: 42px;
    }

    @media screen and (min-width: 768px) {
      column-gap: 60px;
    }

    @media screen and (min-width: 1440px) {
      column-gap: 130px;
      margin-top: 25px;
    }
  }

  ul li {
    width: 50%;

    @media screen and (min-width: 450px) {
      width: calc((100% - 42px) / 2);
    }

    @media screen and (min-width: 768px) {
      width: calc((100% - 65px) / 2);
    }

    @media screen and (min-width: 1440px) {
      width: calc((100% - 150px) / 2);
    }
  }

  ul a {
    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #000;
    transition: color 150ms linear;

    &:hover,
    &:focus {
      color: #c85120;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
    }
  }
`;

export const ContactsBlock = styled.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: -30px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    width: calc((100% - 170px * 2) / 3);
  }

  p {
    font-family: Nunito;
    font-size: 16px;
    margin-bottom: 26px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 24px;
    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 24px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const FooterContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }

  li a {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #000;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 150ms linear;

    &:hover,
    &:focus {
      color: #c85120;
    }

    &:hover svg,
    &:focus svg {
      fill: #c85120;
    }

    svg {
      transition: fill 150ms linear;

      @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const AllRightsReservedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media screen and (min-width: 1440px) {
    margin-top: 120px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #000;
    color: #000;
    font-family: Nunito;
    font-size: 13px;
    font-weight: 200;
    line-height: 1;
  }

  p {
    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #000;
  }
`;
