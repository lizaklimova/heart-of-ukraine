import styled from "styled-components";

export const ProfileBackCont = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 40px 40px;
  width: 100%;
  height: 381px;
  box-shadow: 0 4px 12px 0 rgba(112, 122, 167, 0.25);
  background: #ecf2fb;
  z-index: -1;
  &.personal {
    height: 409px;
  }
  &.change {
    height: 261px;
  }
  &.other {
    height: 261px;
  }
  @media screen and (min-width: 768px) {
    height: 422px;
    &.personal {
      height: 485px;
    }
    &.change {
      height: 319px;
    }
    &.other {
      height: 319px;
    }
  }
  @media screen and (min-width: 1440px) {
    height: 581px;
    &.change {
      height: 390px;
    }
  }
`;
