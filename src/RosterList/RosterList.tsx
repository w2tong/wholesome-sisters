import Member from './Member'
import rosterJSON from './roster.json'

function RosterList () {
  const roster = rosterJSON.map(member => <Member {...member} key={member.name}/>)

  return (
    <div className="memberWindow overflow-auto">
      <h1>Roster list here</h1>
      {roster}
    </div>
  )
}

export default RosterList
