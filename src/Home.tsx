import styled from 'styled-components'
import NewsCards from './NewsCards/NewsCards'
import GalleryCarousel from './GalleryCarousel'
import GuildInfo from './GuildInfo'

const NewsFeedContainer = styled.div`
  width 70%
`

const GalleryGuildInfoContainer = styled.div`
  width: 30%
`

const FlexboxContainer = styled.div`
  display: flex
`

function Home () {
  return (
    <div>
      <FlexboxContainer>
        <NewsFeedContainer>
          <NewsCards />
        </NewsFeedContainer>
        <GalleryGuildInfoContainer>
          <GalleryCarousel />
          <GuildInfo />
        </GalleryGuildInfoContainer>
      </FlexboxContainer>
    </div>
  )
}

export default Home
