import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import NewsFeed from './NewsFeed/NewsFeed'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'
import { BackgroundColor, HighlightColor } from './styles'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HeaderContainer = styled.div`
  height: auto;
`

const FooterContainer = styled.div`
  margin-top: auto;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${BackgroundColor};
`

const StyledNavLink = styled(NavLink)`
  min-width: 80px;
  text-align: center;
  padding: 20px 40px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background-color: ${HighlightColor};
  }
  &.active {
    color: red;
    font-weight: bold;
  }
`

const BodyContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`

function App () {
  return (
    <Container>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      <Router basename="/">
      <Links>
        <StyledNavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Home</StyledNavLink>
        <StyledNavLink to="/news" className={(navData) => (navData.isActive ? 'active' : '')}>News</StyledNavLink>
        <StyledNavLink to="/roster" className={(navData) => (navData.isActive ? 'active' : '')}>Roster</StyledNavLink>
      </Links>
      <BodyContainer>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/news' element={<NewsFeed/>}></Route>
          <Route path='/roster' element={<RosterList/>}></Route>
        </Routes>
      </BodyContainer>
      </Router>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </Container>
  )
}

export default App
