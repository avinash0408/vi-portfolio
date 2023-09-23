import React from 'react';
import styled from 'styled-components';


const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;



const AboutFragment = () => {

  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
          <div>
            <p>
              Hi there! Myself Avinash.Full Stack Developer with over 3 years of experience in Java/JS, Angular, React, Python. Extensive knowledge of cutting-edge development tools and techniques.
            </p>
            <p>
             Currently I have been working with Oracle as an Application Developer in GHR - Person team.
            </p>
          </div>
      </div>
    </StyledAboutSection>
  );
};

export default AboutFragment;