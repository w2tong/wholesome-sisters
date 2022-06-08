import React from 'react'

interface SearchBarProps {
  handleChange: (e: string) => void;
  value: string;
}

function SearchBar (props: SearchBarProps) {
  return (
    <div>
      Search: <input onChange={(e) => props.handleChange(e.currentTarget.value)} value={props.value}/>
    </div>
  )
}

export default SearchBar
