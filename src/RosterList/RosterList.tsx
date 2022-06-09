import { useState } from 'react'
import SearchBar from '../SearchBar'
import Member from './Member'
import rosterJSON from './roster.json'

function RosterList () {
  const [input, setInput] = useState('')
  const roster = rosterJSON.filter(member => member.name.toLowerCase().includes(input.trim().toLowerCase())
  ).map(member => <Member {...member} key={member.name}/>)

  return (
    <div className="memberWindow overflow-auto">
      <h1>Roster list here</h1>
      <SearchBar handleChange={setInput} value={input}/>
      {roster}
    </div>
  )
}

export default RosterList
