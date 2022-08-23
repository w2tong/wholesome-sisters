import MemberCard from './MemberCard'
import rosterJSON from '../../json/roster.json'
import styled from 'styled-components'
import { Title } from '../../styles'

const StyledRoster = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledMemberCard = styled(MemberCard)`
  margin: 10px;
`

const roster = rosterJSON.roster.map(member => <StyledMemberCard {...member} key={member.name}/>)

function RosterList () {
  return (
    <div>
      <Title>Roster</Title>
      <StyledRoster>
        {roster}
      </StyledRoster>
    </div>
  )
}

export default RosterList
