import styled from 'styled-components'
import media from './media'

const Container = styled.div`
  border: white solid 1px;
  padding: 10px;
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
  padding: 10px;
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

const Header = styled.div`
  font-size: 24px;
  text-align: center;
`

function GuildInfo () {
  return (
    <Container>
      <GameContainer>
        <Header>World of Warcraft</Header>
        <div>Content here</div>
        <div>Content here</div>
        <div>Content here</div>
      </GameContainer>
      <GameContainer>
        <Header>Lost Ark</Header>
        <div>Content here</div>
        <div>Content here</div>
        <div>Content here</div>
      </GameContainer>
    </Container>
  )
}

export default GuildInfo
