import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";

const StyledScroll = styled(ScrollToTop)`
&&& {
    width: 60px;
    height: 60px;
    background-color: transparent;
    box-shadow: none;
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 2;
    cursor: pointer;
    border: none;
  }

  &&& svg {
    width: 60px;
    height: 60px;
    fill: url(#paint0_linear_1944_5258);
    transition: fill 0.1s ease;
  }

  &&&:hover svg {
    fill: rgba(12, 120, 163, 0.8);
  }

  &&&:active svg {
    fill: #D4DDF3;
  }
}
`;

export default StyledScroll;