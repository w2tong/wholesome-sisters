import useCollapse from 'react-collapsed'
import styled from 'styled-components'

const CharBarCollapsed = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  padding: 5px 15px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`

const CharBarExpanded = styled(CharBarCollapsed)`
  background-color: rgba(255, 255, 255, 0.2);
`

const Content = styled.section`
  background-color: rgba(255, 255, 255, 0.1); 
`
const Container = styled.div`
  font-size:20px;
`

const FlexboxContainer = styled.div`
  display: flex;
`

const IFrame = styled.iframe`
  flex-grow: 0.5;
  width: auto;
  height: auto;
`

interface MemberProps {
  name: string
}

const warcraftLogsLink = 'https://www.warcraftlogs.com/character/us/bleeding-hollow/'
const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'
const raiderIOCharacterWidgetSettings = '?embed=1&embedmode=summary&embedname=1&classcolors=1&characterBackground=1&showtime=10&chromargb=transparent'

function Member (props: MemberProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  console.log(getToggleProps)
  // TODO: dynamically change width and height of RaiderIO widget
  return (
    <Container>
      {isExpanded
        ? <CharBarExpanded {...getToggleProps()}>
        {props.name}
        <div>-</div>
      </CharBarExpanded>
        : <CharBarCollapsed {...getToggleProps()}>
        {props.name}
        <div>+</div>
      </CharBarCollapsed>}
      <Content {...getCollapseProps()}>
        <FlexboxContainer>
          <IFrame src={raiderIOLink + props.name + raiderIOCharacterWidgetSettings} width="805px" height="181px"/>
        </FlexboxContainer>
        <a href={raiderIOLink + props.name} target="_blank" rel="noreferrer">
          <img title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
        </a>
        <a href={warcraftLogsLink + props.name} title="Warcraft Logs Profile" target="_blank" rel="noopener noreferrer">wclogs</a>
      </Content>
    </Container>
  )
}

export default Member
