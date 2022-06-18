import styled from 'styled-components'
import media from './media'
import { Title, Header, Text, ContentBackgroundColor } from './styles'

const Container = styled.div`
  // border: white solid 1px;
  margin: 0 10px;
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
  // border: white solid 1px;
  border-radius: 10px;
  background-color: ${ContentBackgroundColor};
  padding: 10px;
  margin-bottom: 15px;
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

const Server = styled(Text)`
  color: white;
  text-align: center;
`

function GuildInfo () {
  return (
    <div>
      <Title>Guild Progress</Title>
      <Container>
        <GameContainer>
          <StyledHeader>World of Warcraft</StyledHeader>
          <Server>US Bleeding Hollow</Server>
          <Text>&ensp;0/10 Eternity&apos;s End</Text>
          <Text>&ensp;6/10 Sanctum of Domination</Text>
          <Text>10/10 Sanctum of Domination</Text>
          <Text>10/10 Castle Nathria Heroic</Text>
          <Text>10/10 Castle Nathria Normal</Text>
        </GameContainer>
        <GameContainer>
          <StyledHeader>Lost Ark</StyledHeader>
          <Server>NA East Una</Server>
          <Text>☐ Vykas Hard</Text>
          <Text>☐ Vykas Normal</Text>
          <Text>☑ Valtan Hard</Text>
          <Text>☑ Valtan Normal</Text>
          <Text>☑ Argos</Text>
        </GameContainer>
      </Container>
    </div>
  )
}

export default GuildInfo
