import styled from 'styled-components'
import NewsCards from './NewsCards/NewsCards'
import GalleryCarousel from './GalleryCarousel'
import GuildInfo from './GuildInfo'

interface HomeProps {
  height: number
}

const NewsFeedContainer = styled.div`
  width 70%
`

const GalleryGuildInfoContainer = styled.div`
  width: 30%
`

function Home (props: HomeProps) {
  const FlexboxContainer = styled.div`
    display: flex
    height: ${props.height}
  `
  return (
      <FlexboxContainer>
        <NewsFeedContainer>
          <NewsCards />
        </NewsFeedContainer>
        <GalleryGuildInfoContainer>
          <GalleryCarousel />
          <GuildInfo />
        </GalleryGuildInfoContainer>
      </FlexboxContainer>
  )
}

export default Home
