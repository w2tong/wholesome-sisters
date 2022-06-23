import styled from 'styled-components'
import HorizontalRule from '../HorizontalRule'
import media from '../media'
import { ContentBackgroundColor, TextHighlightColor, Icon } from '../styles'
import portraitPlaceHolder from '../img/portrait-placeholder.png'

const warcraftLogsLink = 'https://www.warcraftlogs.com/character/us/bleeding-hollow/'
const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'

interface MemberProps {
  name: string;
  role: string;
  wow: {
    name: string;
    class: string;
    portraitURL: string | null;
  } | null
  lostArk: {
    name: string;
    class: string;
    portrait: string | null;
  } | null,
  className?: string
}

const Container = styled.div`
  border-radius: 10px;
  padding: 10px 10px;
  background-color: ${ContentBackgroundColor};
  width: 320px;
  max-width: 320px;
  height: auto;
  font-size: 18px;
  @media (max-width: ${media.XSmall}px) {
    width: 92.5%;
  }
`

const GameContainer = styled.div`
  display: flex;
  padding: 5px;
`

const Portrait = styled.img`
  width: 64px;
  height: 64px;
`

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  @media (max-width: ${media.XSmall}px) {
    flex-direction: column;
    align-items: center;
  }
`

const Role = styled.span`
  color: ${TextHighlightColor};
  font-weight: bold;
`

const classColor: {[key: string]: string} = {
  'Death Knight': '#C41E3A',
  'Demon Hunter': '#A330C9',
  Druid: '#FF7C0A',
  Evoker: '#33937F',
  Hunter: '#AAD372',
  Mage: '#3FC7EB',
  Monk: '#00FF98',
  Paladin: '#F48CBA',
  Priest: '#FFFFFF',
  Rogue: '#FFF468',
  Shaman: '#0070DD',
  Warlock: '#8788EE',
  Warrior: '#C69B6D'
}

const Class = styled.div<{wowClass: string}>`
  color: ${props => props.wowClass ? classColor[props.wowClass] : 'white'};
`

const NameClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 16px;
`

const LinksContainer = styled.div`
  display: flex;
  margin-left: auto;
  @media (max-width: ${media.XSmall}px) {
    flex-direction: column;
    justify-content: center;
  }
`

function Member (props: MemberProps) {
  return (
      <Container className={props.className}>
        <Name>{props.name}<Role>{props.role}</Role></Name>
        <HorizontalRule text="World of Warcraft" fontSize={14} lineHeight={2}/>
        <GameContainer>
          <Portrait src={props.wow && props.wow.portraitURL ? props.wow.portraitURL : portraitPlaceHolder}/>
          <NameClassContainer>
            <div>{props.wow ? props.wow.name : 'N/A'}</div>
            {props.wow ? <Class wowClass={props.wow.class}>{props.wow.class}</Class> : 'N/A'}
          </NameClassContainer>
          {props.wow
            ? <LinksContainer>
              <a href={raiderIOLink + props.wow.name} target="_blank" rel="noreferrer">
                <Icon title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
              </a>
              <a href={warcraftLogsLink + props.wow.name} target="_blank" rel="noreferrer">
                <Icon title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/>
              </a>
            </LinksContainer>
            : <div></div>
          }
        </GameContainer>
        <HorizontalRule text="Lost Ark" fontSize={14} lineHeight={2}/>
        <GameContainer>
        <Portrait src={props.lostArk && props.lostArk.portrait ? require(`../img/LostArkPortrait/${props.lostArk.portrait}`) : portraitPlaceHolder}/>
          <NameClassContainer>
            <div>{props.lostArk ? props.lostArk.name : 'N/A'}</div>
            <div>{props.lostArk ? props.lostArk.class : 'N/A'}</div>
          </NameClassContainer>
        </GameContainer>
      </Container>
  )
}

export default Member
