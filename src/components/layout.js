import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle,theme } from '../styles';
import NavBar from './navbar';



const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children,location}) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }

  });
  return (
    <main>
      <div id="root">
      <ThemeProvider theme={theme}>
      <GlobalStyle /> 
    <NavBar></NavBar>
     </ThemeProvider>
      </div>
      <div id="content">
        {children}
      </div>
    </main>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;

