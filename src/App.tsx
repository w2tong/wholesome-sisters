import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
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

const NavLink = styled(Link)`
  padding: 20px 40px;
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background-color: ${HighlightColor};
  }
`

function App () {
  return (
    <Container>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      <Router basename="/">
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/roster">Roster</NavLink>
      </Links>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/news' element={<NewsFeed/>}></Route>
          <Route path='/roster' element={<RosterList/>}></Route>
        </Routes>
      </Router>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </Container>
  )
}

export default App
