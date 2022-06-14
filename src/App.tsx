import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import NewsFeed from './NewsFeed/NewsFeed'
import RosterList from './RosterList/RosterList'
import Footer from './Footer'

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const headerHeight = 10
const footerHeight = 10
const bodyHeight = 80

function App () {
  return (
    <div>
      <Header height={headerHeight}/>
      <Router>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/roster">Roster</Link>
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
