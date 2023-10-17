import React from 'react';
import styled from 'styled-components';


const StyledAboutSection = styled.section`
  max-width: 900px;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 125px 0 0 0;
  
  h2{
    font-family: Handlee;
  }
  .inner {
    font-family : Poppins;
    font-size : var(--fz-md);
    color: var(--slate);
    padding :auto;

    @media (max-width: 768px) {
      display: block;
    }

    p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.8em;
    }
  }
`;



const AboutFragment = () => {

    return (
        <StyledAboutSection id="about">
            <h2 className="sideHeading">About Me</h2>

            <div className="inner">
                    <p>
                        As an Application Developer at Oracle, I bring a unique blend of creativity and technical acumen, backed by a solid foundation in Java, JavaScript, React, Node, and Angular. My passion for web application development has driven me to refine my skills, enabling me to deliver robust and efficient solutions that consistently surpass client expectations.
                    </p>
                    <p>
                        My tenure at Oracle has exposed me to a variety of projects, each one enhancing my problem-solving abilities and deepening my understanding of application development. I am perpetually eager to stay updated with the latest industry technologies and trends.
                    </p>
                    <p>
                        With an aspiration to transition into freelance full-stack development, I look forward to applying my skills in diverse settings and taking on projects that provide both creative and technical challenges. My technical prowess coupled with my fervor for this field makes me a valuable addition to any team.
                    </p>
            </div>
        </StyledAboutSection>
    );
};

export default AboutFragment;