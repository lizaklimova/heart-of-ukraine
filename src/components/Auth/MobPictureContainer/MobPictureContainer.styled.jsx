import styled from "styled-components";

export const MobPicContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 0 30px 0;
  background-color: #efeff5;
  &::-webkit-scrollbar {
    width: 4px !important;
    height: 4px !important;
  }

  &::-webkit-scrollbar-track {
    background: rgba(200, 81, 32, 0.3) !important;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgba(200, 81, 32, 1) 0%,
      rgba(255, 165, 2, 1) 100%
    ) !important;
    border-radius: 4px !important;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
