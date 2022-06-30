import './RaidProgress.css'
import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'
import { Content2BackgroundColor, BackgroundHighlightColor, TextHighlightColor } from '../../styles'

interface BossProgressProps {
  name: string;
  bosses: { name: string, cleared: boolean }[];
  className?: string;
}

const Green = 'rgb(0,255,0)'

const Container = styled.div`
`

const Header = styled.div<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.isOpened ? BackgroundHighlightColor : Content2BackgroundColor};
  &:hover {
    background-color: ${BackgroundHighlightColor};
  }

`
const RaidProgress = styled.div<{ color: string }>`
  flex: 15%;
  text-align: right;
  font-weight: bold;
  padding: 8px 5px;
  color: ${props => props.color}
`

const RaidName = styled.div`
  flex: 85%;
  padding-left: 10px;

  ${Header}:hover & {
    color: ${TextHighlightColor};
  }
`

const CollapseContent = styled.div`
  background-color: ${Content2BackgroundColor};
  padding: 10px 0;
`

const Boss = styled.div`
  display: flex;
  padding: 3px 30px;
`

const Checkbox = styled.span<{ color: string }>`
  flex: 10%;
  color: ${props => props.color};
`

const BossName = styled.span`
  flex: 90%;
`

function BossProgress (props: BossProgressProps) {
  const curr = props.bosses.filter(boss => boss.cleared).length
  const total = props.bosses.length

  const bosses = props.bosses.map(boss =>
    <Boss key={props.name + boss.name}>
      <Checkbox color={boss.cleared ? Green : 'red'}>{boss.cleared ? '☑ ' : '☐ '}</Checkbox>
      <BossName>{boss.name}</BossName>
    </Boss>
  )

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false)

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  )

  return (
    <Container className={props.className}>
      <Header onClick={onClick} isOpened={isButtonCollapseOpen}>
        <RaidProgress color={curr < total ? 'yellow' : Green}>{curr}/{total}</RaidProgress>
        <RaidName>{props.name}</RaidName>
      </Header>
      <Collapse isOpened={isButtonCollapseOpen}>
        <CollapseContent>
          {bosses}
        </CollapseContent>
      </Collapse>
    </Container>
  )
}

export default BossProgress
