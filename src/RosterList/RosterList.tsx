import Member from './Member'
import rosterJSON from '../json/roster.json'
import styled from 'styled-components'
import { Title } from '../styles'

const StyledRoster = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 25px;
`

const StyledMember = styled(Member)`
  display: flex;
`

function RosterList () {
  const roster = rosterJSON.map(member => <StyledMember {...member} key={member.name}/>)

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
