import React from 'react';
import styled from 'styled-components';


const StyledIntroSection = styled.section`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height:75vh;
  padding: 275px 0 0 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
  div{
    height:100%;
    width:100%;
    
  h1 {
    margin: 0 0 30px 4px;
    color: var(--blue);
    font-family: Poppins;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2{
    color : var(--green);
    font-family : Handlee;
    font-size : 48px;
    margin:0;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    font-family: Handlee;
    line-height: 0.9;
    margin:0;
  }
}
    
  }
`;



const IntroFragment = () => {

  return (
    <StyledIntroSection id="intro">
          <div>
            <h1 >Hi there! I'm ↓</h1>  
            <h2>Avinash Samudrala</h2>
            <h3>
            Full Stack Developer with over 3 years of experience in Java/JS, Angular, React, Python.
            </h3>
            </div>
    </StyledIntroSection>
  );
};

export default IntroFragment;