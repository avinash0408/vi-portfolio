import * as React from "react"
import styled from 'styled-components';
import AboutFragment from "../components/fragments/about"
import Layout from '../components/layout'

const StyledMain = styled.main`
  
`;
const HomePage = ({location}) => {
  <script src="https://kit.fontawesome.com/e1e7e23ed1.js" crossorigin="anonymous"></script>
  return (
    <Layout location={location}>
        <AboutFragment></AboutFragment>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Avinash Samudrala</title>
