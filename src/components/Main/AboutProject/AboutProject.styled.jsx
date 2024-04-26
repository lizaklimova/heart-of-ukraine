import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 72px 0;

  @media screen and (min-width: 768px) {
    padding: 111px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 0;
  }

  @media screen and (min-width: 1920px) {
    padding: 200px 0 224px 0;
  }
`;

export const SectionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    padding-left: 0;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }

  svg#vertical {
    position: absolute;
    left: 0;
    transform: rotate(180deg);

    @media screen and (min-width: 768px) {
      left: -13px;
    }

    @media screen and (min-width: 1440px) {
      left: -16px;
    }
  }

  img {
    width: 100%;
    height: 69px;
    object-fit: cover;

    @media screen and (min-width: 450px) {
      height: 90px;
    }

    @media screen and (min-width: 768px) {
      width: 506px;
    }

    @media screen and (min-width: 1024px) {
      width: 600px;
      height: 100px;
    }

    @media screen and (min-width: 1440px) {
      height: 144px;
      width: 740px;
      object-fit: cover;
    }

    @media screen and (min-width: 1920px) {
      width: unset;
    }
  }

  p {
    font-family: Nunito;
    font-size: 16px;
    line-height: normal;
    color: #0b1c24;

    @media screen and (min-width: 768px) {
      max-width: 655px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 558px;
    }
  }
`;

export const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 600px) {
    img {
      width: 558px;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    gap: 32px;

    img {
      width: 506px;
    }

    p {
      align-self: flex-start;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 600px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 48px;

    img {
      width: 740px;
    }

    p {
      align-self: flex-start;
    }
  }

  @media screen and (min-width: 1920px) {
    img {
      width: unset;
    }

    gap: 80px;
  }
`;

export const SecondBlock = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
  }
`;

export const ThirdBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 32px;

    p {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 48px;
  }

  @media screen and (min-width: 1920px) {
    gap: 80px;
  }
`;

export const BottomArrowBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  svg {
    display: none;
  }

  @media screen and (max-width: 767px) {
    #mob-arrow {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-top: 44px;

    #tab-arrow {
      display: block;
    }
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    margin-top: 54px;

    #tab-arrow {
      display: none;
    }

    #desk-arrow {
      display: block;
    }
  }

  @media screen and (min-width: 1920px) {
    margin-top: 66px;
  }
`;
