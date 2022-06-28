import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyle'
import styled from 'styled-components'
import ScrollToTop from './ScrollToTop'
import Header from './Header'
import Home from './Home'
import NewsFeed from './News/NewsFeed'
import News from './News/NewsArticleRoute'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'
import media from '../media'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HeightAuto = styled.div`
  height: auto;
`

const BodyContainer = styled.div`
  max-width: ${media.XLarge}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`

function App () {
  return (
    <Container>
      <HeightAuto>
      <GlobalStyle/>
      <Router basename="/">
        <ScrollToTop/>
        <Header/>
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
