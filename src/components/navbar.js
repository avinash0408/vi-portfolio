import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import GlobalStyle from "../styles/GlobalStyle";
import { IconLogo } from './icons/index';
import Menu from "./menu";
    

const StyledHeader = styled.header`
${({ theme }) => theme.mixins.flexBetween};
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

`;
const StyledNavBar = styled.nav`
${({ theme }) => theme.mixins.flexBetween};
  display = flex;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family:'Handlee', cursive;
  font-size: 14px;
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
      width: 42px;
      color: var(--blue);
      height: 42px;
  }
  a:hover{
    color :var(--green)
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    display:flex;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-md);

      a {
        padding: 10px;
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;
const ResumeLink = (
    <a className="resume-button" href="/vi_resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  const Logo = (
    <a className="logo" href="/">
        <IconLogo />
    </a>
  );

const NavBar = ({ itemName, itemLink, isSelected }) => {
    return (
        <>
            <GlobalStyle />
            <StyledHeader>
                <StyledNavBar>
                {Logo}
                    <StyledLinks>
                    <ul>
                        <li>
                            <Link to='/#about'>About</Link>
                        </li>
                        <li>
                            <Link to="/#experience">Experiecne</Link>
                        </li>
                        <li>
                            <Link to="/#project">Projects</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                        
                    </ul>
                    <div>{ResumeLink}</div>
                    </StyledLinks>
                    <Menu/>
                </StyledNavBar>
            </StyledHeader>
        </>
    )
}

export default NavBar;
