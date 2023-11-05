import React from 'react';
import styled from 'styled-components';
import ProjectItemFragment from './projectlist';

const StyledProjectSection = styled.section`
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
    display : flex;
    flex-direction : column;
    font-size : var(--fz-md);
    color: var(--slate);
    width : 100%;
    padding: 10px 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      display: block;
    }

  }
`;


const ProjectFragment = () => {

    return (
        <StyledProjectSection id="project">
            <h2 className="sideHeading">Projects</h2>

            <div className="inner">
              <ProjectItemFragment name ="Viflix" site="https://viflix-81647.web.app" img="viflix"></ProjectItemFragment>
              <ProjectItemFragment name="Vi-Weather" site="https://vi-weather-7748c.web.app" img="vi-weather"></ProjectItemFragment>
              <ProjectItemFragment name="Hostel Management" site="https://github.com/avinash0408/hostel-management/tree/master" img="hostel-management"></ProjectItemFragment>
            </div>

        </StyledProjectSection>
    );
};

export default ProjectFragment;