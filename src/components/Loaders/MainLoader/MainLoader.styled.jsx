import styled, { keyframes } from "styled-components";

const spinLoader = keyframes`
0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}
`;

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fc;
  z-index: 100;
`;
export const LoaderImg = styled.img`
  animation: ${spinLoader} 3s linear infinite;
`;
