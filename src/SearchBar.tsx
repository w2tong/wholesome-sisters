import styled from 'styled-components'

interface SearchBarProps {
  handleChange: (e: string) => void;
  value: string;
  placeholder: string;
}

const Input = styled.input`
  width: 100%;
  background-image: url(https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png);
  background-repeat: no-repeat;
  background-position: right;
  font-size: 20px;
  box-sizing: border-box;
`

function SearchBar (props: SearchBarProps) {
  return (
    <div>
      <Input onChange={(e) => props.handleChange(e.currentTarget.value)} value={props.value} placeholder={props.placeholder}/>
    </div>
  )
}

export default SearchBar
