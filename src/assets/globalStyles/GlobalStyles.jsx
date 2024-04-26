import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after  {
  box-sizing: border-box;
}

/* html {
     scrollbar-color: rgba(255, 165, 2, 1) rgba(255, 255, 255, 0);
     ::-webkit-scrollbar {
  width: 4px !important; 
  height: 4px !important; 
}

::-webkit-scrollbar-track { 
  background: rgba(200, 81, 32, 0.3);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0% ,
    rgba(255, 165, 2, 1) 100%
    
  ); 
  border-radius: 4px;  
}
} */

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.25;
  background-color: #F9F9FC;
  margin: 0;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

input, textarea {
  font-family: inherit;
  transition: border 150ms linear;
   outline: none;

  &:not(.invalid):hover,
  &:not(.invalid):focus {
    border: 2px solid  #CDE3FA;
    background: #F5F5F5;
 
  }

  &:hover,
  &:focus {
   outline: none;
 
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
}


::-webkit-scrollbar {
  width: 4px !important; 
  height: 4px !important; 
}

::-webkit-scrollbar-track { 
  background: rgba(200, 81, 32, 0.3);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0% ,
    rgba(255, 165, 2, 1) 100%
    
  ); 
  border-radius: 4px;  
}

::selection {
  background-color: #c852208c !important;
}

.no-scroll {
  overflow: hidden;
}

.accent-text {
  transition: color 0.2s linear;

  &:hover,
  &:focus {
    color: #872E00;
  }

  &:hover svg,
  &:focus  svg {
    stroke: #872E00;
  }

  &:active {
    color: #5A1E00;
  }

  &:active svg{
    stroke: #5A1E00;
  }
}

.accent-button {
  border-radius: 12px;
  background:  conic-gradient(from -3deg at 100% -13%, #FFA502 0deg, #C85120 360deg);
  transition: all 0.2s linear;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: conic-gradient(from -3deg at 100% -13%, #FFA502 0deg, #EF4E0B 360deg);
    border: none;
    outline: none;
  }

  &:not(:disabled):active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), conic-gradient(from -3deg at 100% -13%, #FFA502 0deg, #C85120 360deg);
  }  
}

.remove-accent-text {
  transition: color 0.2s linear;

  &:hover,
  &:focus {
    color: #ff0b0b;
  }

  &:hover svg,
  &:focus  svg {
    fill: #ff0b0b;
  }

  &:active {
    color: #a90000;
  }

  &:active svg{
    fill: #a90000;
  }
}

:root {
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export default GlobalStyles;
