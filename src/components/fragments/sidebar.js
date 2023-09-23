import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSide = styled.div`
width:40px;
position: fixed;
bottom: 0;
left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
z-index: 10;
color: var(--light-slate);

@media (max-width: 1080px) {
  left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
}

@media (max-width: 768px) {
  display: none;
}

`;
const SideBar = ({children,orientation}) =>{
    return (
        <StyledSide orientation={orientation}>
           <>{children}</>
        </StyledSide>
    );
}
SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string,
  };
  
  export default SideBar;