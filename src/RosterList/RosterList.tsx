import MemberCard from './MemberCard'
import rosterJSON from '../json/roster.json'
import styled from 'styled-components'
import { Title, Body } from '../styles'

const StyledRoster = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 25px;
`

function RosterList () {
  const roster = rosterJSON.map(member => <MemberCard {...member} key={member.name}/>)

  return (
    <Body>
      <Title>Roster</Title>
      <StyledRoster>
        {roster}
      </StyledRoster>
    </Body>

  )
}

export default RosterList
