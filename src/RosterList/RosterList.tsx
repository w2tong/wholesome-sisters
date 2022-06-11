import { useState } from 'react'
import SearchBar from '../SearchBar'
import Member from './Member'
import rosterJSON from './roster.json'
import styled from 'styled-components'

const StyledRoster = styled.div`
  height:35vh;
`

const StyledSearchBar = styled.div`
  margin-top:11px;
  float:right;
`
function RosterList () {
  const [input, setInput] = useState('')
  const roster = rosterJSON.filter(member => member.name.toLowerCase().includes(input.trim().toLowerCase())
  ).map(member => <Member {...member} key={member.name}/>)

  return (
    <StyledRoster className="overflow-auto">
      <div className="row g-0">
      <h1 className="col-lg-7">Roster</h1>
      <StyledSearchBar className="col-lg-5">
        <SearchBar handleChange={setInput} value={input} placeholder="Filter character name.."/>
      </StyledSearchBar>
      </div>
      {roster}
    </StyledRoster>
  )
}

export default RosterList
