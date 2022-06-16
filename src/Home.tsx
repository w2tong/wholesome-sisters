import styled from 'styled-components'
import NewsCards from './LatestNews/LatestNews'
import GalleryCarousel from './GalleryCarousel'
import GuildInfo from './GuildInfo'
import media from './media'
import { Body } from './styles'

const NewsFeedContainer = styled.div`
  flex: 70%;
  @media (max-width: ${media.ExtraLarge}px) {
    flex: 100%
  }
`

const GuildInfoContainer = styled.div`
  flex: 30%;
  @media (max-width: ${media.ExtraLarge}px) {
    flex: 100%
  }
`

const NewsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${media.ExtraLarge}px) {
    flex-wrap: wrap;
  }
`

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function Home () {
  return (
    <Body>
      <FlexboxContainer>
        <GalleryCarousel/>
        <NewsInfoContainer>
          <NewsFeedContainer>
            <NewsCards/>
          </NewsFeedContainer>
          <GuildInfoContainer>
            <GuildInfo/>
          </GuildInfoContainer>
        </NewsInfoContainer>
      </FlexboxContainer>
    </Body>
  )
}

export default Home
