import React from 'react';
import styled from 'styled-components';
import CustomizedAccordions from '../../components/accordion';
import { oracleFte, oracleIntern } from '../../config';

const StyledExperienceSection = styled.section`
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
    width : 100%;
    padding: 10px 10px;
    margin-bottom: 10px;

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

    .workHeader{
        display: flex;
        white-space: nowrap;
        padding : 0 20px;
    }
    .workTitle{
    display: flex;
    align-items: center;
    margin : 0 20px;
    width: 100%;
    white-space: nowrap;

    color: var(--blue);
    font-size: var(--fz-heading);
    }
    .JobTitle{
        display: flex;
        white-space: nowrap;
        align-items: center;
        width:100%;
    }
  }

`;



const ExperienceFragment = () => {

    return (
        <StyledExperienceSection id="experience">
            <h2 className="sideHeading">Work Experience</h2>

            <div className="inner">
                <h3 className="workTitle">Oracle</h3>
              <CustomizedAccordions title = "Application Developer II" period = "July, 2022 - Present" summary={oracleFte}></CustomizedAccordions>
              <CustomizedAccordions title = "Intern - Applications Engineer" period = "May, 2021 - July, 2021" summary={oracleIntern}></CustomizedAccordions>
            </div>

        </StyledExperienceSection>
    );
};

export default ExperienceFragment;