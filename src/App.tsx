import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Home from './Home'
import NewsFeed from './News/NewsFeed'
import News from './News/NewsArticleRoute'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'
import media from './media'
import { ContentBackgroundColor, BackgroundHighlightColor, TextHighlightColor } from './styles'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${ContentBackgroundColor};
`

const StyledNavLink = styled(NavLink)`
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
`

const BodyContainer = styled.div`
  max-width: ${media.XXLarge}px;
  margin-left: auto;
  margin-right: auto;
`

function App () {
  return (
    <Container>
      <Header/>
      <Router basename="/">
        <ScrollToTop/>
        <Links>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/news">News</StyledNavLink>
          <StyledNavLink to="/roster">Roster</StyledNavLink>
        </Links>
        <BodyContainer>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/news' element={<NewsFeed/>}/>
            <Route path='/news/:id' element={<News/>}/>
            <Route path='/roster' element={<RosterList/>}/>
          </Routes>
        </BodyContainer>
      </Router>
      <Footer/>
    </Container>
  )
}

export default App
