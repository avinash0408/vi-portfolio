import React from "react";
import styled from 'styled-components';
import SideBar from "./sidebar";
import { socialMedia } from '../../config';
import Icon from "../icons/getIcon";
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      &:hover,
      &:focus {
        color: var(--green)
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
const SocialApps = () => {
    return (
        <>
            <SideBar orientation="left">
                <StyledSocialList>
                    {socialMedia &&
                        socialMedia.map(({ url, name }, i) => (
                            <li key={i}>
                                <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                                    <Icon name={name} />
                                </a>
                            </li>
                        ))}
                </StyledSocialList>
            </SideBar>
        </>
    );
}

export default SocialApps;
