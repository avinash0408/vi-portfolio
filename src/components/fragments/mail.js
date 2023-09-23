import React from "react";
import styled from 'styled-components';
import SideBar from "./sidebar";
import { email } from '../../config';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
    a { 
      margin: 20px auto;
    padding: 10px;
    font-family: Poppins;
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--green)
      }
    }
  }
`;
const Mail = () => {
    return (
        <main>
            <SideBar orientation="right">
                <StyledSocialList>
                    <a>
                    <a href={`mailto:${email}`}>{email}</a>
                    </a>
                </StyledSocialList>
            </SideBar>
        </main>
    );
}

export default Mail;
