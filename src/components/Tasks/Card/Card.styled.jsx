import styled from "styled-components";
import { gradientTextHover } from "../Tasks.styled";

export const CardItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1440px) {
    width: calc((100% - 32px) / 2);
    ${({ $desktop }) => $desktop && "width: 100%;"}
  }
`;

export const CardBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  background-color: #fff;
  padding: 24px;
  box-shadow: 0px 4px 12px 0px rgba(112, 122, 167, 0.25);
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    min-height: 360px;

    &.opened {
      height: unset;
    }
  }
`;

export const UserDateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #b3b3b3;
    border-radius: 50%;
    width: 60px;
    height: 60px;

    svg {
      transform: scale(1.9);
    }
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 60px;
    object-fit: cover;
  }

  p {
    font-family: Nunito;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #000;
  }
`;

export const DateWrap = styled.div`
  @media screen and (max-width: 767px) {
    ${({ $status }) => ($status ? "display:flex" : "display: none")};
  }

  position: relative;
  ${({ $status }) => $status && "margin-right:20px;"}
  display: flex;
  flex-direction: column;
  gap: 16px;

  .details-button {
    position: absolute;
    top: 0;
    right: -25px;
  }

  p,
  time {
    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #000;
  }
`;

export const DateMobWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  &.profile-date {
    margin-top: 24px;
  }

  p,
  time {
    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const OfferTitle = styled.h4`
  font-family: Nunito;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  color: #000;
  margin-bottom: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ $isTextHidden }) =>
    $isTextHidden &&
    "white-space: wrap;overflow: visible;word-wrap: break-word;"}
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;

  &::-webkit-scrollbar-thumb {
    margin-top: 7px;
  }

  li div {
    @media screen and (max-width: 330px) {
      font-size: 14px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    border-radius: 18px;
    border: 1px solid #548ba0;
    padding: 8px 22px;
    background-color: #ecf2f4;
    color: #548ba0;
    text-transform: capitalize;

    p {
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg use {
      stroke: #548ba0;
      fill: #548ba0;
    }
  }
`;

export const OfferDescription = styled.p`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  color: #000;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  align-self: stretch;
  ${({ $isTextHidden }) => !$isTextHidden && "-webkit-line-clamp: 4;"}
  white-space: unset;
  text-overflow: ellipsis;
  word-wrap: break-word;

  &.comment {
    margin-top: -15px;
    word-wrap: break-word;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    &.comment {
      margin-top: -30px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;

    &.comment {
      margin-top: -20px;
    }
  }
`;

export const SeeDetailsButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  ${gradientTextHover}
  margin: 0 auto;
`;

export const PicturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      width: calc((100% - 32px) / 3);
      height: 160px;
    }
  }
`;

export const ApplyButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 450px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const ApplyForHelpBtn = styled.button`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  width: 100%;
  max-width: 340px;
  border-radius: 12px;
  padding: 12px 0;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  transition: all 150ms linear;

  &#no-info {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    min-width: 340px;
  }
`;

export const CloseDetailsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${gradientTextHover}

  img {
    transform: rotate(180deg);
  }
`;

export const ActionsBlock = styled.div`
  position: absolute;
  top: 25px;
  right: -20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 15px;
  background: #fff;
  width: 150px;
  height: 100px;
  padding: 8px;
  box-shadow: 0px 4px 12px 0px rgba(112, 122, 167, 0.25);

  a,
  button {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 600;
    line-height: normal;
    color: #053041;
    /* width: 100%; */
    padding: 0;
  }

  a svg {
    fill: none;
    stroke: #053041;
  }
`;
