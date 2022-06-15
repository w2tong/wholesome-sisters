import styled from 'styled-components'
import IFrame from '../IFrame'
import HorizontalRule from '../HorizontalRule'
import { BackgroundColor } from '../styles'

const raiderIOCharWidgetWidth = 805
const raiderIOCharWidgetHeight = 181
const raiderIOCharWidgetScale = 0.5
const warcraftLogsLink = 'https://www.warcraftlogs.com/character/us/bleeding-hollow/'
const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'
const raiderIOCharacterWidgetSettings = '?embed=1&embedmode=summary&embedname=1&classcolors=1&characterBackground=1&showtime=10&chromargb=transparent'

const Container = styled.div`
  border-radius: 10px;
  padding: 25px;
  margin: 10px;
  background-color: ${BackgroundColor};
`

const GameContainer = styled.div`
  margin: 5px 0px;
`

const IFrameContainer = styled.div`
  width: ${raiderIOCharWidgetWidth * raiderIOCharWidgetScale}px;
  height: ${raiderIOCharWidgetHeight * raiderIOCharWidgetScale}px;
  transform: scale(${raiderIOCharWidgetScale});
  transform-origin: 0 0;
`

const Name = styled.div`
  font-size: 16px;
`

const Role = styled.span`
  color: red;
  font-weight: bold;
`

interface MemberProps {
  name: string;
  role: string;
  wowName: string;
  lostArk: {
    name: string;
    class: string;
    itemLevel: number;
  } | null;
}

function Member (props: MemberProps) {
  return (
      <Container>
        <Name>{props.name} <Role>{props.role}</Role></Name>
        <HorizontalRule text="World of Warcraft" fontSize={14} lineHeight={2}/>
        <GameContainer>
          <a href={raiderIOLink + props.wowName} target="_blank" rel="noreferrer">
            <img title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
          </a>
          <a href={warcraftLogsLink + props.wowName} title="Warcraft Logs Profile" target="_blank" rel="noopener noreferrer"><img title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/></a>
          <IFrameContainer>
            <IFrame url={raiderIOLink + props.wowName + raiderIOCharacterWidgetSettings} width={raiderIOCharWidgetWidth} height={raiderIOCharWidgetHeight}/>
          </IFrameContainer>
        </GameContainer>
        <HorizontalRule text="Lost Ark" fontSize={14} lineHeight={2}/>
        <GameContainer>
          {props.lostArk ? `${props.lostArk.name} ${props.lostArk.class} ${props.lostArk.itemLevel}` : <div>Donezo</div>}
        </GameContainer>
      </Container>
  )
}

export default Member
