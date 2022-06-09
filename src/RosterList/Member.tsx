import useCollapse from 'react-collapsed'
import styled from 'styled-components'

const Content = styled.section`
border: 5px solid red;
overflow: auto;
`

interface MemberProps {
  name: string
}

function Member (props: MemberProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const raiderIOLink = `https://raider.io/characters/us/bleeding-hollow/${props.name}`

  return (
    <div>
      <div {...getToggleProps()}>
        {props.name} {isExpanded ? '-' : '+'}
      </div>
      <Content {...getCollapseProps()}>
        <a href={raiderIOLink} target="_blank" rel="noreferrer">link</a>
        <iframe src={`${raiderIOLink}?embed=1&embedmode=summary&embedname=1&classcolors=1&characterBackground=1&showtime=10&chromargb=transparent`} width="805px" height="181px" />
      </Content>
    </div>
  )
}

export default Member
