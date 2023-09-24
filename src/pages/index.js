import * as React from "react"
import styled from 'styled-components';
import {IntroFragment,AboutFragment} from "../components/fragments/index"
import Layout from '../components/layout'

const StyledMain = styled.main`
margin: 0px auto;
width: 100%;
max-width: 1600px;
min-height: 100vh;
`;
const HomePage = ({location}) => {
  <script src="https://kit.fontawesome.com/e1e7e23ed1.js" crossorigin="anonymous"></script>
  return (
    <Layout location={location}>
      <StyledMain className="fillHeight">
        <IntroFragment/>
       <AboutFragment/> 
      </StyledMain>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Avinash Samudrala</title>
