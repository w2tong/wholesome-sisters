import styled from 'styled-components'
import HorizontalRule from '../HorizontalRule'
import media from '../media'
import { BackgroundColor } from '../styles'

const warcraftLogsLink = 'https://www.warcraftlogs.com/character/us/bleeding-hollow/'
const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'

const Container = styled.div`
  border-radius: 10px;
  padding: 25px 10px;
  margin: 10px;
  background-color: ${BackgroundColor};
  width: 315px;
  height: auto;
  font-size: 18px;
  @media (max-width: ${media.Tablet}px) {
    width: 92.5%;
  }
  @media (max-width: ${media.Mobile}px) {
    font-size: 14px;
  }
`

const GameContainer = styled.div`
  display: flex;
  padding: 5px;
`

const Portrait = styled.img`
  width: auto;
  height: auto;
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: ${media.Mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`

const Role = styled.span`
  color: red;
  font-weight: bold;
`

const Class = styled.div`
  &.death-knight {
    color: #C41E3A;
  }
  &.demon-hunter {
    color: #A330C9;
  }
  &.druid {
    color: #FF7C0A;
  }
  &.evoker {
    color: #33937F;
  }
  &.hunter {
    color: #AAD372;
  }
  &.mage {
    color: #3FC7EB;
  }
  &.monk {
    color: #00FF98;
  }
  &.paladin {
    color: #F48CBA;
  }
  &.priest {
    color: #FFFFFF;
  }
  &.rogue {
    color: #FFF468;
  }
  &.shaman {
    color: #0070DD;
  }
  &.warlock {
    color: #8788EE;
  }
  &.warrior {
    color: #C69B6D;
  }
`

const NameClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`

const Icon = styled.img`
  width: 32px;
  height: 32px;
  padding: 5px;
`

const LinksContainer = styled.div`
  display: flex;
  margin-left: auto;
  @media (max-width: ${media.Mobile}px) {
    flex-direction: column;
    justify-content: center;
  }
`

interface MemberProps {
  name: string;
  role: string;
  wow: {
    name: string;
    class: string;
    portraitURL: string;
  }
  lostArk: {
    name: string;
    class: string;
  } | null;
}

function Member (props: MemberProps) {
  return (
      <Container>
        <Name>{props.name}<Role>{props.role}</Role></Name>
        <HorizontalRule text="World of Warcraft" fontSize={14} lineHeight={2}/>
        <GameContainer>
          <Portrait src={props.wow.portraitURL}/>
          <NameClassContainer>
            <div>{`${props.wow.name}`}</div>
            <Class className={(props.wow.class).toLowerCase().replace(' ', '-')}>{props.wow.class}</Class>
          </NameClassContainer>
          <LinksContainer>
            <a href={raiderIOLink + props.wow.name} target="_blank" rel="noreferrer">
              <Icon title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
            </a>
            <a href={warcraftLogsLink + props.wow.name} target="_blank" rel="noreferrer">
              <Icon title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/>
            </a>
          </LinksContainer>
        </GameContainer>
        <HorizontalRule text="Lost Ark" fontSize={14} lineHeight={2}/>
        <GameContainer>
          {props.lostArk ? `${props.lostArk.name} ${props.lostArk.class}` : <div>Donezo</div>}
        </GameContainer>
      </Container>
  )
}

export default Member