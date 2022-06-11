import { useState } from 'react'
import SearchBar from '../SearchBar'
import Member from './Member'
import rosterJSON from './roster.json'
import styled from 'styled-components'
import { FlexSpaceBetween, Title } from '../styles'

const StyledRoster = styled.div`
  height:40vh;
  padding: 25px;
`

function RosterList () {
  const [input, setInput] = useState('')
  const roster = rosterJSON.filter(member => member.name.toLowerCase().includes(input.trim().toLowerCase())
  ).map(member => <Member {...member} key={member.name}/>)

  return (
    <StyledRoster className="overflow-auto">
      <FlexSpaceBetween>
        <Title>Roster</Title>
        <SearchBar handleChange={setInput} value={input} placeholder="Filter character name.."/>
      </FlexSpaceBetween>
      {roster}
    </StyledRoster>
  )
}

export default RosterList
