import './App.css'
import styled from 'styled-components'
import Header from './Header'
import NewsFeed from './NewsFeed/NewsFeed'
import MemeberCarousel from './MemberCarousel'
import MemeberList from './RosterList/RosterList'
import Footer from './Footer'

const NewsFeedContainer = styled.div`
  width 70%
`

const GalleryGuildInfoContainer = styled.div`
  width: 30%
`

const FlexboxContainer = styled.div`
  display: flex
`

function App () {
  return (
    <div>
      <Header />
        <FlexboxContainer>
          <NewsFeedContainer>
            <NewsFeed />
          </NewsFeedContainer>
          <GalleryGuildInfoContainer>
            <MemeberCarousel />
            <MemeberList />
          </GalleryGuildInfoContainer>
        </FlexboxContainer>
      <Footer />
    </div>
  )
}

export default App
