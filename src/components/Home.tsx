import styled from 'styled-components'
import LatestNews from './News/LatestNews'
import GalleryCarousel from './Carousel/Carousel'
import GuildProgress from './GuildProgress/GuildProgress'
import media from '../media'

const StyledLatestNews = styled(LatestNews)`
  flex: 70%;
  padding: 0 10px;
  @media (max-width: ${media.XLarge}px) {
    flex: 100%
  }
`

const StyledGuildProgress = styled(GuildProgress)`
  flex: 30%;
  @media (max-width: ${media.XLarge}px) {
    flex: 100%
  }
`

const NewsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${media.XLarge}px) {
    flex-wrap: wrap;
  }
`

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function Home () {
  return (
    <FlexboxContainer>
      <GalleryCarousel/>
      <NewsInfoContainer>
        <StyledLatestNews/>
        <StyledGuildProgress/>
      </NewsInfoContainer>
    </FlexboxContainer>
  )
}

export default Home
