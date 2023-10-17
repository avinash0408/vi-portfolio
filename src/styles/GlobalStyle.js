import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 145px;
      }
      @media (max-width: 768px) {
        padding: 0 60px;
      }
      @media (max-width: 480px) {
        padding: 0 30px;
      }
    }
  }
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  .sideHeading{
    display: flex;
    align-items: center;
    margin: 10px 0px 40px;
    width: 100%;
    white-space: nowrap;

    color: var(--green);
    font-size: var(--fz-heading);

    &:after{
        content: '';
        display: block;
        background-color: var(--dark-slate);
        position: relative;
        top: -5px;
        width: 300px;
        height: 1px;
        margin-left: 20px;
  
        @media (max-width: 1080px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          margin-left: 10px;
        }
    }
  }
  .reverse{
    &:before{
        content: '';
        display: block;
        background-color: var(--dark-slate);
        position: relative;
        top: -5px;
        width: 300px;
        height: 1px;
        margin-right: 20px;
  
        @media (max-width: 1080px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          margin-left: 10px;
        }
    }
    &:after{
        content: none;
    }
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    }

  
`;

export default GlobalStyle;