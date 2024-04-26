import styled from "styled-components";

export const DetailsMsgWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
`;

export const DetailsQntyCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #14ae5c;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 27px;
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 53px;
    height: 53px;
    font-size: 35.333px;
  }
`;

export const DetailsText = styled.p`
  text-align: center;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const HideDetailsBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid #053041;
  padding-bottom: 12px;
  margin: 32px auto 0 auto;

  svg {
    stroke: #053041;
    fill: none;
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #053041;
  }
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const DetailsBlock = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  padding: 22px;
  padding-bottom: 34px;
  margin-top: 7px;
  background-color: #d8dee4;
  background-color: ${({ $isApproved, $isCompleted }) =>
    ($isApproved || $isCompleted) &&
    "rgba(193, 215, 203, 0.20);padding: 40px 20px;margin-top:16px;"};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 44px;
    ${({ $isApproved, $isCompleted }) =>
      ($isApproved || $isCompleted) && "padding: 40px 20px;"};
    ${({ $variant, $isCompleted }) =>
      ($variant === "responses" || $isCompleted) && "padding-bottom: 0;"};
  }
`;

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;

  p,
  time {
    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #0b1c24;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-end;
    gap: 16px;
    ${({ $isApproved, $isCompleted }) =>
      ($isCompleted || $isApproved) &&
      "position:absolute;right: 20px;top: 20px;flex-direction:column;align-items:flex-start;"};
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;

  li {
    div p,
    div {
      font-family: Nunito;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 1.5;
    }

    div p {
      min-width: 100px;
    }

    div span {
      ${({ $isApproved, $isCompleted }) =>
        ($isApproved || $isCompleted) &&
        "display: inline-block;width: 60%;border-bottom: 1px solid #D8DEE4;"};
    }

    div {
      font-weight: 500;
      display: flex;
      gap: 30px;

      &.region {
        text-transform: capitalize;
      }

      @media screen and (min-width: 768px) {
        gap: 45px;
      }
    }
  }
`;

export const BtnsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
  }

  & .accent-button {
    width: 100%;
    max-width: 321px;
    padding: 12px 24px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    color: #fff;
  }
`;

export const RejectBtn = styled.button`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: #fe4747;
`;
