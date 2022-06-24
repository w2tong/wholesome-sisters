import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import GlobalStyle from './globalStyle'
import styled from 'styled-components'
import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Home from './Home'
import NewsFeed from './News/NewsFeed'
import News from './News/NewsArticleRoute'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'
import media from './media'
import { ContentBackgroundColor, Content2BackgroundColor, BackgroundHighlightColor, TextHighlightColor } from './styles'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HeightAuto = styled.div`
  height: auto;
`

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${ContentBackgroundColor};
  border-bottom: solid 2px ${Content2BackgroundColor};
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 80px;
  text-align: center;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: ${TextHighlightColor};
    background-color: ${BackgroundHighlightColor};
  }
  &.active {
    color: ${TextHighlightColor};
    font-weight: bold;
  }
  @media (max-width: ${media.XSmall}px) {
    padding: 10px 10px;
  }
`

const BodyContainer = styled.div`
  max-width: ${media.XLarge}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

function App () {
  return (
    <Container>
      <HeightAuto>
      <GlobalStyle/>
      <Header/>
      <Router basename="/">
        <ScrollToTop/>
        <NavBar>
          <div><StyledNavLink to="/">Home</StyledNavLink></div>
          <div><StyledNavLink to="/news">News</StyledNavLink></div>
          <div><StyledNavLink to="/roster">Roster</StyledNavLink></div>
        </NavBar>
        <BodyContainer>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<NewsFeed/>}/>
            <Route path='/news/:id' element={<News/>}/>
            <Route path='/roster' element={<RosterList/>}/>
          </Routes>
        </BodyContainer>
      </Router>
      </HeightAuto>
      <Footer/>
    </Container>
  )
}

export default App
