import styled from 'styled-components'
import media from '../../media'
import { Title, Header, Text, ContentBackgroundColor } from '../../styles'
import raidProgressJSON from '../../json/raid-progress.json'
import RaidProgress from './RaidProgress'

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
  }
  @media (max-width: ${media.Small}px) {
    width: 90%;
  }
`

const StyledHeader = styled(Header)`
  text-align: center;
`

const Server = styled(Text)`
  color: white;
  text-align: center;
`

const StyledRaidProgress = styled(RaidProgress)`
  padding-top: 5px;
`

const wowRaids = raidProgressJSON.wow.map(raid => <StyledRaidProgress key={raid.name} name={raid.name} bosses={raid.bosses}/>)
const lostArkRaids = raidProgressJSON.lostArk.map(raid => <StyledRaidProgress key={raid.name} name={raid.name} bosses={raid.bosses}/>)

function GuildInfo ({ className } : {className?: string}) {
  return (
    <div className={className}>
      <Title>Guild Progress</Title>
      <Container>
        <GameContainer>
          <StyledHeader>World of Warcraft</StyledHeader>
          <Server>US Bleeding Hollow</Server>
          {wowRaids}
        </GameContainer>
        <GameContainer>
          <StyledHeader>Lost Ark</StyledHeader>
          <Server>NA East Una</Server>
          {lostArkRaids}
        </GameContainer>
      </Container>
    </div>
  )
}

export default GuildInfo
