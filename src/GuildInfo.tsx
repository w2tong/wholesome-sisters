import styled from 'styled-components'
import media from './media'
import { Header, Text, ContentBackgroundColor } from './styles'

const Container = styled.div`
  border: white solid 1px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  @media (max-width: ${media.XLarge}px) {
    flex-direction: row;
    justify-content: space-evenly;
    
  }
  @media (max-width: ${media.Small}px) {
    flex-direction: column;
    align-items: center;
  }
`

const GameContainer = styled.div`
  border: white solid 1px;
  border-radius: 10px;
  background-color: ${ContentBackgroundColor};
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${media.XLarge}px) {
    max-width: 400px;
    width: 45%;
    justify-content: center;
  }
  @media (max-width: ${media.Small}px) {
    width: 90%;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const StyledHeader = styled(Header)`
  text-align: center;
`

function GuildInfo () {
  return (
    <Container>
      <GameContainer>
        <StyledHeader>World of Warcraft</StyledHeader>
        <Text>US Bleeding Hollow</Text>
        <div>Content here</div>
        <div>Content here</div>
      </GameContainer>
      <GameContainer>
        <StyledHeader>Lost Ark</StyledHeader>
        <div>NA East Una</div>
        <div>Content here</div>
        <div>Content here</div>
      </GameContainer>
    </Container>
  )
}

export default GuildInfo
