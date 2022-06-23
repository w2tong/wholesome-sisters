import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'
// import { ContentBackgroundColor } from '../styles'

interface BossProgressProps {
  name: string;
  bosses: {name: string, cleared: boolean}[];
  className?: string;
}

const Container = styled.div`
  background-color: black;
`

const Header = styled.div`
  display: flex;
  border: solid  1px white;
  background-color: black;
`
const RaidProgress = styled.div<{color: string}>`
  flex: 12%;
  text-align: right;
  color: ${props => props.color}
`

const RaidName = styled.div`
  flex: 88%;
  padding-left: 10px;
`

const Checkbox = styled.span<{color: string}>`
  color: ${props => props.color};
`

function BossProgress (props: BossProgressProps) {
  const curr = props.bosses.filter(boss => boss.cleared).length
  const total = props.bosses.length

  const bosses = props.bosses.map(boss =>
    <div key={props.name + boss.name}>
      <Checkbox color={boss.cleared ? 'lightgreen' : 'red'}>{boss.cleared ? '☑' : '☐'}</Checkbox>
      {boss.name}
    </div>
  )

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false)

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  )

  return (
    <Container>
      <Header onClick={onClick}>
        <RaidProgress color={curr < total ? 'yellow' : 'lightgreen'}>{curr}/{total}</RaidProgress>
        <RaidName>{props.name}</RaidName>
      </Header>
      <Collapse isOpened={isButtonCollapseOpen}>
        {bosses}
      </Collapse>
    </Container>
  )
}

export default BossProgress
