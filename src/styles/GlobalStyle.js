import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    background-color: var(--navy);
    color: var(--lightest-slate);
    font-family: 'Handlee', cursive;
    font-size: var(--fz-xl);
    line-height: 1.3;

  }
  #root {
    min-height: 100vh;
    display: grid;
    font-family: 'Poppins', sans-serif;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  li {

  }
`;

export default GlobalStyle;