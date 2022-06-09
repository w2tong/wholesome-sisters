import useCollapse from 'react-collapsed'
import styled from 'styled-components'

const Content = styled.section`

`
const Container = styled.div`
border: 1px solid black;
`

interface MemberProps {
  name: string
}

const raiderIOLink = 'https://raider.io/characters/us/bleeding-hollow/'
const raiderIOCharacterWidgetSettings = '?embed=1&embedmode=summary&embedname=1&classcolors=1&characterBackground=1&showtime=10&chromargb=transparent'

function Member (props: MemberProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  // TODO: dynamically change width and height of RaiderIO widget
  return (
    <Container>
      <div {...getToggleProps()}>
        {props.name} {isExpanded ? '-' : '+'}
      </div>
      <Content {...getCollapseProps()}>
        <a href={raiderIOLink + props.name} target="_blank" rel="noreferrer">
          <img title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
        </a>
        <a href="https://www.warcraftlogs.com/character/us/bleeding-hollow/Fourlegs" title="Warcraft Logs Profile" target="_blank" rel="noopener noreferrer">wclogs</a>

        <iframe src={raiderIOLink + props.name + raiderIOCharacterWidgetSettings} width="805px" height="181px" />
      </Content>
    </Container>
  )
}

export default Member
