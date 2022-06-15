import styled from 'styled-components'
import HorizontalRule from '../HorizontalRule'
import media from '../media'
import { BackgroundColor } from '../styles'

const warcraftLogsLink = 'https://www.warcraftlogs.com/character/us/bleeding-hollow/'
const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'

const Container = styled.div`
  border-radius: 10px;
  padding: 25px 0;
  margin: 10px;
  background-color: ${BackgroundColor};
  width: 300px;
  height: 250px;
  font-size: 16px;
  @media (max-width: ${media.Tablet}px) {
    width: 85%;
  }
`

const GameContainer = styled.div`
  display: flex;
  padding: 5px;
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

const Image = styled.img`
  width: auto;
  height: auto;
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

          <Image src={props.wow.portraitURL}/>
          <div>{`${props.wow.name} ${props.wow.class}`}</div>
          <a href={raiderIOLink + props.wow.name} target="_blank" rel="noreferrer">
            <img title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
          </a>
          <a href={warcraftLogsLink + props.wow.name} title="Warcraft Logs Profile" target="_blank" rel="noopener noreferrer"><img title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/></a>
        </GameContainer>
        <HorizontalRule text="Lost Ark" fontSize={14} lineHeight={2}/>
        <GameContainer>
          {props.lostArk ? `${props.lostArk.name} ${props.lostArk.class}` : <div>Donezo</div>}
        </GameContainer>
      </Container>
  )
}

export default Member
