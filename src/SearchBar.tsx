import React from 'react'

interface SearchBarProps {
  handleChange: (e: string) => void;
  value: string;
  placeholder: string;
}

function SearchBar (props: SearchBarProps) {
  return (
    <div>
      <input onChange={(e) => props.handleChange(e.currentTarget.value)} value={props.value} placeholder={props.placeholder}/>
    </div>
  )
}

export default SearchBar
