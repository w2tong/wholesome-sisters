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

interface MemberProps {
  name: string
}

function Member (props: MemberProps) {
  return (
      <Container>
        {props.name} - Role
        <HorizontalRule text="World of Warcraft" fontSize={14} lineHeight={2}/>
        <GameContainer>
          <a href={raiderIOLink + props.name} target="_blank" rel="noreferrer">
            <img title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
          </a>
          <a href={warcraftLogsLink + props.name} title="Warcraft Logs Profile" target="_blank" rel="noopener noreferrer"><img title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/></a>
          <IFrameContainer>
            <IFrame url={raiderIOLink + props.name + raiderIOCharacterWidgetSettings} width={raiderIOCharWidgetWidth} height={raiderIOCharWidgetHeight}/>
          </IFrameContainer>
        </GameContainer>
        <HorizontalRule text="Lost Ark" fontSize={14} lineHeight={2}/>
        <GameContainer>
          Lost Ark stuff here
        </GameContainer>
      </Container>
  )
}

export default Member
