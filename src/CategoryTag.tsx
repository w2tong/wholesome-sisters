import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface CategoryProps {
  category: string;
  className?: string
}

const categoryColors: {[key: string]: string} = {
  wow: '#009AE4',
  la: '#a5794a'
}

const categoryText: {[key: string]: string} = {
  wow: 'WoW',
  la: 'LA'
}

const StyledLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`

const Category = styled.span<{category: string}>`
  font-size: 14px;
  background-color: ${props => categoryColors[props.category]};
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
`

function CategoryTag (props: CategoryProps) {
  return (
    <StyledLink to={`/news?search=${props.category}`}>
      <Category {...props}>{categoryText[props.category]}</Category>
    </StyledLink>
  )
}

export default CategoryTag
