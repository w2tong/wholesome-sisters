import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import NewsFeed from './NewsFeed/NewsFeed'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'
import { BackgroundColor, HighlightColor } from './styles'
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

const headerHeight = 10
const footerHeight = 5
const bodyHeight = 80

function App () {
  return (
    <div>
      <Header height={headerHeight}/>
      <Router basename="/wholesome-sisters">
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/roster">Roster</NavLink>
      </Links>
        <Routes>
          <Route path='/' element={< Home height={bodyHeight}/>}></Route>
          <Route path='/news' element={< NewsFeed />}></Route>
          <Route path='/roster' element={< RosterList />}></Route>
        </Routes>
      </Router>
      <Footer height={footerHeight}/>
    </div>
  )
}

export default App
