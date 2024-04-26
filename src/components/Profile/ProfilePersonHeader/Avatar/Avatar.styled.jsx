import styled from "styled-components";

export const AvatarHeader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b3b3b3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.personal {
    width: 115px;
    height: 115px;

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
    }
  }

  &.change {
    width: 115px;
    height: 115px;
    border-radius: 135px;
    ${({ $avatar }) =>
      $avatar &&
      `background: linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0.5) 100%),url(${$avatar}) lightgray 50% / cover no-repeat;`}

    @media screen and (min-width: 768px) {
      width: 135px;
      height: 135px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 135px;
    height: 135px;
  }
`;

// export const SvgLogoUserHeader = styled.svg`
//   width: 75px;
//   height: 70px;
//   fill: #e9e9e9;

//   &.personal,
//   &.change {
//     width: 80px;
//     height: 75px;
//   }
// `;

export const CameraWrap = styled.div`
  position: absolute;
  width: 49px;
  height: 44px;

  @media screen and (min-width: 768px) {
    width: 57px;
    height: 51px;
  }
`;
