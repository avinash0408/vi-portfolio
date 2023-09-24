import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';
import NavBar from './navbar';
import SocialApps from './fragments/social';
import Mail from './fragments/mail';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }

  });
  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <NavBar />
            <SocialApps />
            <Mail />
            <div id="content">
              {children}
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;

