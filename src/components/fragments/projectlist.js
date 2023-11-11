import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Icon from "../icons/getIcon";



const StyledListSection = styled.section`
  max-width: 900px;
  display:flex;
  flex-direction:row;
  align-items :center;
  padding:10px;
  h2{
    font-family: Handlee;
  }
  .projectImg {
    width: 50%;
  }
  .projectTitle {
    font-size : var(--fz-md);
    padding-left : 20px;
    text-wrap: wrap;
    display :flex;
    align-items : center;

  }
  .projectTitle:hover {
    color : var(--green);
  }
  
`;

const ImageOverlay = ({img}) => {
    if(img === "viflix") {
        return (
    <StaticImage src="../../images/viflix.png"
            objectFit="cover"  alt="Netflix Clone"
            className = "projectImg" />
        )
    }
    else if(img === "vi-weather") {
        return (
    <StaticImage src="../../images/vi-weather.png"
            objectFit="cover"  alt="Weather Forecast App"
            className = "projectImg" />
        )
    }
    else if(img === "hostel-management") {
        return (
    <StaticImage src="../../images/hostel-management.png"
            objectFit="cover"  alt="Hostel Management App"
            className = "projectImg" />
        )
    }
}

const ProjectItemFragment = ({img,name,site}) => {

    return (
        <StyledListSection>
           <ImageOverlay img={img}></ImageOverlay>
            <a className="projectTitle" href={site} target="_blank" rel="noopener noreferrer">
                {name}
                <Icon name="GoUrl"/>
            </a>
        </StyledListSection>
    );
};

export default ProjectItemFragment;